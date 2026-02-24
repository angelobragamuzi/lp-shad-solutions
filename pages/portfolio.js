import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PortfolioPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/");
    }, [router]);

    return (
        <>
            <Head>
                <title>Redirecionando | Shad Solutions</title>
                <meta httpEquiv="refresh" content="0; url=/" />
            </Head>
            <main style={{ minHeight: "40vh", display: "grid", placeItems: "center" }}>
                <p>Portfólio indisponível no momento. Redirecionando...</p>
            </main>
        </>
    );
}
