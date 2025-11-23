import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/contexts/AuthContext";
import useGetBeneficiariesByUser from "@/hooks/useGetBeneficiariesByUser";
import { Beneficiado } from "@/types/beneficiados.type";
import { BookOpen, Star } from "lucide-react";
import { useContext } from "react";

export default function BeneficiadosContent() {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, refetch } = useGetBeneficiariesByUser(user.id);

  const beneficiaries: (Beneficiado & { id: number })[] = data?.beneficiados
    ? data.beneficiados.map((b, idx) => ({ ...b, id: idx + 1 }))
    : [];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Seus Beneficiários</h2>
        <p className="text-muted-foreground">Conheça as crianças que estão sendo impactadas pela sua generosidade</p>
      </div>

      {isError ? (
        <div className="text-center">
          <p className="text-red-600 mb-4">Ocorreu um erro ao carregar os beneficiários.</p>
          <button onClick={() => refetch()} className="px-4 py-2 bg-primary text-white rounded">
            Tentar novamente
          </button>
        </div>
      ) : isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : beneficiaries.length === 0 ? (
        <div className="text-center text-sm text-muted-foreground">Nenhum beneficiário encontrado.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beneficiaries.map((b) => {
            const { beneficiaryData, lastBook, progress, message } = b;
            return (
              <Card key={b.id} className="hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {beneficiaryData.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{beneficiaryData.name}</CardTitle>
                      <CardDescription>
                        {beneficiaryData.age} anos • {beneficiaryData.locale}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        <strong>Último livro:</strong> {lastBook}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-secondary" />
                      <span className="text-sm">
                        <strong>Progresso:</strong> {progress}
                      </span>
                    </div>
                  </div>

                  {message && (
                    <div className="mt-4 p-3 bg-accent/30 rounded-lg">
                      <p className="text-sm text-accent-foreground italic">"{message}"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SkeletonCard() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-muted rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-muted rounded w-1/3" />
            <div className="h-3 bg-muted rounded w-1/2" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="h-3 bg-muted rounded w-2/3" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>

        <div className="mt-4 p-3 bg-muted/30 rounded-lg">
          <div className="h-3 bg-muted rounded w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
