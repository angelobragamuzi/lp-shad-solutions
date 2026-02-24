import Reveal from "./Reveal";

const HERO_POSTER =
    "https://cdn.pixabay.com/video/2022/10/24/136268-764387688_large.jpg";
const HERO_VIDEO =
    "https://cdn.pixabay.com/video/2022/10/24/136268-764387688_medium.mp4";

export default function Hero() {
    return (
        <section className="hero-minimal" id="topo">
            <div className="hero-media" aria-hidden="true">
                <img
                    className="hero-fallback"
                    src={HERO_POSTER}
                    alt=""
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                />
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={HERO_POSTER}
                    tabIndex={-1}
                    aria-hidden="true"
                    disableRemotePlayback
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
                >
                    <source src={HERO_VIDEO} type="video/mp4" />
                </video>
            </div>

            <div className="hero-overlay" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />

            <div className="hero-content-wrap">
                <Reveal className="hero-content-minimal" delay={0.05}>
                    <h1 className="hero-title">
                        Software e sistemas personalizados para acelerar sua empresa.
                    </h1>
                    <p className="hero-subtitle">
                        {"Criamos solu\u00e7\u00f5es sob medida para automatizar processos, aumentar produtividade e apoiar o crescimento do seu neg\u00f3cio."}
                    </p>
                    <div className="hero-cta">
                        <a className="btn primary" href="/#formulario">
                            Iniciar projeto
                        </a>
                        <a className="btn secondary" href="/#planos">
                            Conhecer planos
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}