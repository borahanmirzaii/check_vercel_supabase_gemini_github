import AuthShell from '@/components/layout/auth-shell';
import SignupForm from '@/components/layout/signup-form';

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your LifeAI account"
      description="Start capturing memories, tasks, and AI-guided insights in minutes."
    >
      <SignupForm />
    </AuthShell>
  );
}
