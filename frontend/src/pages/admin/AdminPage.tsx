import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Shield, Users } from "lucide-react";
import PartnerComponent from "./components/PartnerComponent/PartnerComponent";
import RelatoriosComponent from "./components/RelatoriosComponent";
import UserListComponent from "./components/UserListComponent/UserListComponent";

const AdminPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Dashboard <span className="text-primary">Administrativo</span>
            </h1>
            <p className="text-muted-foreground">Gerencie usuários, assinaturas e parceiros da plataforma</p>
          </div>
          <Shield className="h-8 w-8 text-primary" />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="usuarios" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-fit mx-auto">
            <TabsTrigger value="usuarios" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Usuários</span>
            </TabsTrigger>

            <TabsTrigger value="parceiros" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Parceiros</span>
            </TabsTrigger>
            <TabsTrigger value="relatorios" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Relatórios</span>
            </TabsTrigger>
          </TabsList>

          {/* Usuários */}
          <TabsContent value="usuarios">
            <UserListComponent />
          </TabsContent>

          {/* Parceiros */}
          <TabsContent value="parceiros">
            <PartnerComponent />
          </TabsContent>

          {/* Relatórios */}
          <TabsContent value="relatorios">
            <RelatoriosComponent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
