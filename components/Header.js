import Image from "next/image";

const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#diferenciais", label: "Diferenciais" },
];

export default function Header() {
    return (
        <header className="site-header">
            <div className="container nav-shell">
                <a className="logo" href="#topo" aria-label="Shad Solutions">
                    <Image
                        src="/images/logo.svg"
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
                    href="https://wa.me/553398251124?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Solicitar orçamento
                </a>
            </div>
        </header>
    );
}
