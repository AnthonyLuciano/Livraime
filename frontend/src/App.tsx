import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AssinantePage from "@/pages/AssinantePage";
import LoginPage from "@/pages/login/LoginPage";
import PagamentoPage from "@/pages/PagamentoPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AdminPage from "./pages/admin/AdminPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import QuemSomosPage from "./pages/QuemSomosPage";
import SebosPage from "./pages/SebosPage";
import SobrePage from "./pages/SobrePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/assinante" element={<AssinantePage />} />
            <Route path="/pagamento" element={<PagamentoPage />} />
            <Route path="/sebos" element={<SebosPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/quem-somos" element={<QuemSomosPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
