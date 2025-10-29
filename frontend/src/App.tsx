import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AssinantePage from "./pages/AssinantePage";
import SebosPage from "./pages/SebosPage";
import AdminPage from "./pages/admin/AdminPage";
import QuemSomosPage from "./pages/QuemSomosPage";
import SobrePage from "./pages/SobrePage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";

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
