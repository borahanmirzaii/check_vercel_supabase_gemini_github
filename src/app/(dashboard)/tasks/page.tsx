import TaskBoard from '@/components/tasks/task-board';
import TaskInsights from '@/components/tasks/task-insights';

export default function TasksPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Tasks & focus</h1>
        <p className="text-sm text-muted-foreground">
          Manage AI-generated action items and custom tasks with reminders, recurrence, and pillar alignment.
        </p>
      </header>
      <TaskInsights />
      <TaskBoard />
    </div>
  );
}
