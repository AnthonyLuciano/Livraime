import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function LoginHeader() {
  return (
    <div className="text-center">
      <Link
        to="/"
        className="inline-flex items-center space-x-2 mb-6 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Voltar para Home</span>
      </Link>

      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="p-3 bg-gradient-hero rounded-xl">
          <BookOpen className="h-8 w-8 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">Livrai-me</span>
      </div>
    </div>
  );
}
