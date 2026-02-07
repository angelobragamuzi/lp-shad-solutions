import Head from "next/head";
import "../styles/variables.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/components.css";
import "../styles/animations.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
