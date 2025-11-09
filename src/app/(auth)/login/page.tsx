import AuthShell from '@/components/layout/auth-shell';
import LoginForm from '@/components/layout/login-form';

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to access your AI-powered life management workspace."
    >
      <LoginForm />
    </AuthShell>
  );
}
