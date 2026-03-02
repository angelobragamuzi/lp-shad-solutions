import Image from "next/image";
import { BarChart3, MessageSquare, Rocket } from "lucide-react";

const links = [
    { id: "products", href: "/#produtos", label: "Produtos", icon: BarChart3 },
    { id: "budget", href: "/#formulario", label: "Orçamento", icon: Rocket },
    {
        id: "contact",
        href: "/#formulario",
        label: "Falar com especialista",
        icon: MessageSquare,
        opensModal: true,
    },
];

export default function Header({ home = false, onOpenContact }) {
    return (
        <header className={`site-header${home ? " site-header-home" : ""}`}>
            <div className={home ? "nav-shell nav-shell-wide" : "container nav-shell"}>
                <a className="logo" href="/#topo" aria-label="Shad Solutions">
                    <Image
                        src="/logo.svg"
                        alt="Shad Solutions"
                        width={194}
                        height={50}
                        priority={true}
                    />
                </a>

                <nav className="header-actions" aria-label="Navegação principal">
                    {links.map((link) => (
                        <a
                            className="header-action"
                            href={link.href}
                            key={link.id}
                            onClick={(event) => {
                                if (link.opensModal && typeof onOpenContact === "function") {
                                    event.preventDefault();
                                    onOpenContact();
                                }
                            }}
                        >
                            <link.icon size={16} strokeWidth={1.9} aria-hidden="true" />
                            <span>{link.label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
