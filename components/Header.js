import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <div className="container nav">
                <div className="logo">
                    {

                    }
                    <Image
                        src="/images/logo.svg"
                        alt="ShadSolutions"
                        width={210}
                        height={56}
                        priority={false}
                    />
                </div>

                <a href="mailto:contato@shadsolutions.com" className="btn secondary">
                    Contato
                </a>
            </div>
        </header>
    )
}