import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthProvider";
import EmailConfirmationPage from "@/pages/access/confirm-email/EmailConfirmationPage";
import LoginPage from "@/pages/access/login/LoginPage";
import RegisterPage from "@/pages/access/register/RegisterPage"; // Note: I've moved this line to keep the imports alphabetized.
import AdminPage from "@/pages/admin/AdminPage";
import FAQPage from "@/pages/FAQPage";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import PaymentPage from "@/pages/payment/PaymentPage";
import QuemSomosPage from "@/pages/QuemSomosPage";
import SebosPage from "@/pages/SebosPage";
import SobrePage from "@/pages/SobrePage";
import AssinantePage from "@/pages/subscriber/SubscriberPage";
import ProtectedAdminRoutes from "@/utils/router-guards/protected-admin-routes/ProtectedAdminRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ForgotPassword from "./pages/access/login/ForgotPassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cadastro" element={<RegisterPage />} />
              <Route path="/recuperar-senha" element={<ForgotPassword/>} />
              <Route path="/confirmar-email" element={<EmailConfirmationPage />} />
              <Route path="/assinante" element={<AssinantePage />} />
              <Route path="/pagamento" element={<PaymentPage />} />
              <Route path="/sebos" element={<SebosPage />} />
              <Route element={<ProtectedAdminRoutes />}>
                <Route path="/admin" element={<AdminPage />} />
              </Route>
              <Route path="/quem-somos" element={<QuemSomosPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
