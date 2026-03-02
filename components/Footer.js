const links = [
    { href: "/#produtos", label: "Produtos" },
    { href: "/#formulario", label: "Orçamento" },
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

                <nav className="footer-links" aria-label="Links do rodapé">
                    {links.map((link) => (
                        <a href={link.href} key={`${link.href}-${link.label}`}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="footer-info">
                    <p className="footer-meta">{`© ${year} SS Soluções Digitais`}</p>
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
