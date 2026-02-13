import Image from "next/image";

const links = [
    { href: "/#servicos", label: "Serviços" },
    { href: "/shadmanager", label: "ShadManager" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/#diferenciais", label: "Diferenciais" },
    { href: "/planos", label: "Planos" },
];

export default function Header() {
    return (
        <header className="site-header">
            <div className="container nav-shell">
                <a className="logo" href="/#topo" aria-label="Shad Solutions">
                    <Image
                        src="/logo.svg"
                        alt="Shad Solutions"
                        width={194}
                        height={50}
                        priority={true}
                    />
                </a>

                <nav className="nav-links" aria-label="Navegação principal">
                    {links.map((link) => (
                        <a href={link.href} key={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    className="btn header-cta"
                    href="/planos#formulario"
                >
                    Solicitar orçamento
                </a>
            </div>
        </header>
    );
}
