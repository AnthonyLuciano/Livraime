import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@radix-ui/react-tabs";
import { BarChart3, BookOpen, CreditCard } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function RelatoriosComponent() {
  const stats = [
    {
      label: "Assinaturas Ativas",
      value: 89,
      icon: CreditCard,
      color: "text-primary",
    },
    {
      label: "Livros Doados",
      value: 2347,
      icon: BarChart3,
      color: "text-secondary",
    },
    {
      label: "Parceiros",
      value: 25,
      icon: BookOpen,
      color: "text-primary",
    },
  ];

  const chartData = [
    { mes: "Jan", assinaturas: 120, livros: 350 },
    { mes: "Fev", assinaturas: 135, livros: 420 },
    { mes: "Mar", assinaturas: 142, livros: 470 },
    { mes: "Abr", assinaturas: 150, livros: 490 },
    { mes: "Mai", assinaturas: 158, livros: 520 },
    { mes: "Jun", assinaturas: 162, livros: 580 },
  ];

  return (
    <TabsContent value="relatorios">
      <div className="space-y-10">
        {/* Cabeçalho principal */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">Relatórios e Analytics</h2>
            <p className="text-muted-foreground">Acompanhe o desempenho da plataforma em tempo real</p>
          </div>
          <BarChart3 className="h-8 w-8 text-primary" />
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-all duration-200 border-border/60">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
                  </div>
                  <item.icon className={`h-8 w-8 ${item.color}/70`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gráfico de desempenho */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Crescimento de Usuários e Livros Doados</CardTitle>
            <CardDescription>Dados dos últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="assinaturas" name="Assinaturas" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="livros" name="Livros Doados" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
