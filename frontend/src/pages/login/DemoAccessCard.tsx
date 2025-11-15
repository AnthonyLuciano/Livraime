import { Card, CardContent } from "@/components/ui/card";

export function DemoAccessCard() {
  return (
    <>
      <Card className="shadow-soft border-secondary/20 bg-secondary/5">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-secondary">Acesso Demo</h3>
            <p className="text-sm text-muted-foreground">Para testar a plataforma, use:</p>
            <div className="text-sm bg-muted/50 p-3 rounded-lg space-y-1">
              <div>
                <strong>E-mail:</strong> demo@livrai-me.org
              </div>
              <div>
                <strong>Senha:</strong> demo123
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
