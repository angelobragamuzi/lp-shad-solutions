export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/#planos",
            permanent: false,
        },
    };
}

export default function PlanosRedirect() {
    return null;
}