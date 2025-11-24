import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useHasUser } from "@/hooks/useHasUser";
import BeneficiadosContent from "@/pages/subscriber/content/BeneficiadosContent";
import PlansContent from "@/pages/subscriber/content/plan/PlansContent";
import { ProfileContent } from "@/pages/subscriber/content/ProfileContent";
import { TabOptions } from "@/pages/subscriber/SubscriberOptions";

const AssinantePage = () => {
  const { hasUser } = useHasUser();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Área do <span className="text-primary">Assinante</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gerencie sua assinatura e acompanhe o impacto das suas doações
          </p>
        </div>

        <Tabs defaultValue="planos" className="space-y-8">
          {hasUser && <TabOptions />}

          <TabsContent value="planos">
            <PlansContent />
          </TabsContent>

          <TabsContent value="beneficiarios">
            <BeneficiadosContent />
          </TabsContent>

          <TabsContent value="perfil">
            <ProfileContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AssinantePage;
