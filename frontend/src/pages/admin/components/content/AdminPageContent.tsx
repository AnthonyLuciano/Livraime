import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BookOpen, FileText, Users } from "lucide-react";
import PartnerComponent from "./PartnerComponent/PartnerComponent";
import RelatoriosComponent from "./RelatoriosComponent";
import UserListComponent from "./UserListComponent/UserListComponent";

export default function AdminPageContent() {
  return (
    <>
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
    </>
  );
}
