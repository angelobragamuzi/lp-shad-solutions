const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p className="footer-brand">SHAD SOLUTIONS</p>

                <nav className="footer-links" aria-label="Links do rodapé">
                    {links.map((link) => (
                        <a href={link.href} key={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <p className="footer-copy">© {year} SS Soluções Digitais</p>
                <p className="footer-copy">CNPJ: 64.965.729 - ANGELO BRAGA MUZI</p>
                <a
                    className="footer-social"
                    href="https://www.instagram.com/shadsolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Shad Solutions"
                >
                    Instagram: @shadsolutions
                </a>
            </div>
        </footer>
    );
}
