import { Link } from 'react-router-dom';
import { BookOpen, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-soft border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo e Missão */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-gradient-hero rounded-lg">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                                Livrai-me
                            </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Conectamos corações generosos a crianças de comunidades periféricas, promovendo o acesso à
                            educação e transformando vidas através da leitura.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Heart className="h-4 w-4 text-secondary" />
                            <span>Doe livros, transforme vidas</span>
                        </div>
                    </div>

                    {/* Links Úteis */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/quem-somos"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Quem Somos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/sobre"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Sobre o Projeto
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm">contato@livrai-me.org</span>
                            </li>
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-sm">(11) 9999-9999</span>
                            </li>
                            <li className="flex items-start space-x-2 text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                                <span className="text-sm">Natal, RN</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Livrai-me. Todos os direitos reservados.
                        <span className="mx-2">•</span>
                        Feito com <Heart className="inline h-4 w-4 text-secondary mx-1" /> para transformar vidas.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
