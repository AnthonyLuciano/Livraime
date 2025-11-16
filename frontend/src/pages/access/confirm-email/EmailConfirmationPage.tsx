import { LoginHeader } from "../login/LoginHeader";
import { EmailConfirmationForm } from "./EmailConfirmationForm";

export default function EmailConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <LoginHeader />
        <EmailConfirmationForm />
      </div>
    </div>
  );
}
