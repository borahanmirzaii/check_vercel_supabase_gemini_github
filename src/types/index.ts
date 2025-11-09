export type PillarKey =
  | 'health'
  | 'finance'
  | 'career'
  | 'relationships'
  | 'mental'
  | 'learning'
  | 'recreation'
  | 'contribution';

export interface Note {
  id: string;
  userId: string;
  type: 'text' | 'audio' | 'image' | 'video';
  title: string;
  content: string;
  transcription?: string;
  mediaUrl?: string;
  tags: string[];
  pillar?: PillarKey;
  createdAt: string;
  updatedAt: string;
}
