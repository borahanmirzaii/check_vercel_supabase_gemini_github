import Dexie, { Table } from 'dexie';

export interface PendingOperation {
  id?: number;
  type: 'create' | 'update' | 'delete';
  collection: string;
  docId: string;
  data: unknown;
  timestamp: number;
}

class OfflineDatabase extends Dexie {
  notes!: Table<any>;
  tasks!: Table<any>;
  events!: Table<any>;
  pendingOperations!: Table<PendingOperation>;

  constructor() {
    super('LifeAIOffline');
    this.version(1).stores({
      notes: '++id, userId, type, createdAt, synced',
      tasks: '++id, userId, status, dueDate, synced',
      events: '++id, userId, startTime, synced',
      pendingOperations: '++id, collection, timestamp'
    });
  }
}

export const offlineDB = new OfflineDatabase();

export async function queueOperation(operation: Omit<PendingOperation, 'id'>) {
  await offlineDB.pendingOperations.add(operation);
}

export async function syncPendingOperations(execute: (operation: PendingOperation) => Promise<void>) {
  const operations = await offlineDB.pendingOperations.toArray();
  for (const operation of operations) {
    try {
      await execute(operation);
      await offlineDB.pendingOperations.delete(operation.id!);
    } catch (error) {
      console.error('Failed to sync operation', operation, error);
    }
  }
}
