import { LoginHeader } from "../login/LoginHeader";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl space-y-6">
        <LoginHeader />
        <RegisterForm />
      </div>
    </div>
  );
}
