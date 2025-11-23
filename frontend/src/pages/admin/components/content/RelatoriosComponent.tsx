import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@radix-ui/react-tabs";
import { BarChart3, BookOpen, CreditCard } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { api } from "@/config/api";

type Metric = {
  mes: string;
  inscricoes: number;
  livrosDoados: number;
  parceiros: number;
};

export default function RelatoriosComponent() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMetrics();
  }, []);

  async function fetchMetrics() {
    try {
      setLoading(true);
      const resp = await api.get<Metric[]>('/admins/metrics');
      setMetrics(resp.data || []);
    } catch (err: any) {
      console.error('Erro ao buscar métricas', err);
      setError(err?.response?.data || err.message || 'Erro ao buscar métricas');
    } finally {
      setLoading(false);
    }
  }

  // Totais (soma dos últimos 6 meses)
  const totalAssinaturas = metrics.reduce((s, m) => s + (m.inscricoes || 0), 0);
  const totalLivros = metrics.reduce((s, m) => s + (m.livrosDoados || 0), 0);
  const totalParceiros = metrics.reduce((s, m) => s + (m.parceiros || 0), 0);

  const stats = [
    {
      label: "Assinaturas (6 meses)",
      value: totalAssinaturas,
      icon: CreditCard,
      color: "text-primary",
    },
    {
      label: "Livros Doados (6 meses)",
      value: totalLivros,
      icon: BarChart3,
      color: "text-secondary",
    },
    {
      label: "Parceiros (6 meses)",
      value: totalParceiros,
      icon: BookOpen,
      color: "text-primary",
    },
  ];

  const chartData = metrics.map((m) => ({ mes: m.mes, assinaturas: m.inscricoes, livros: m.livrosDoados }));

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

        {loading && <p>Carregando métricas...</p>}
        {error && <p className="text-red-600">Erro: {error}</p>}

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
