const links = [
    { href: "/#produtos", label: "Produtos" },
    { href: "/#planos", label: "Planos" },
    { href: "/#formulario", label: "Contato" },
];

export default function Footer({ home = false }) {
    const year = new Date().getFullYear();

    return (
        <footer className={`footer${home ? " footer-minimal footer-home" : ""}`}>
            <div
                className={
                    home
                        ? "footer-shell-wide footer-inner footer-inner-minimal"
                        : "container footer-inner"
                }
            >
                <p className="footer-brand">SHAD SOLUTIONS</p>

                <nav className="footer-links" aria-label={"Links do rodap\u00e9"}>
                    {links.map((link) => (
                        <a href={link.href} key={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="footer-info">
                    <p className="footer-meta">{`\u00a9 ${year} SS Solu\u00e7\u00f5es Digitais`}</p>
                    <p className="footer-meta">CNPJ: 64.965.729 - ANGELO BRAGA MUZI</p>
                    <a
                        className="footer-social"
                        href="https://www.instagram.com/shadsolutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram da Shad Solutions"
                    >
                        Instagram: @shadsolutions
                    </a>
                    <a className="footer-social" href="mailto:shadsolutionsinteligence@gmail.com">
                        shadsolutionsinteligence@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}