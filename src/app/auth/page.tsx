import { AuthForm } from '@/components/auth-form';

export default function AuthenticationPage() {
  return (
    <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
      <AuthForm />
    </div>
  );
}
