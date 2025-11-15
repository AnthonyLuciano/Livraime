import { DemoAccessCard } from "@/pages/login/DemoAccessCard";
import { LoginForm } from "@/pages/login/LoginForm";
import { LoginHeader } from "./LoginHeader";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md space-y-6">
        <LoginHeader />
        <LoginForm />
        <DemoAccessCard />
      </div>
    </div>
  );
};

export default LoginPage;
