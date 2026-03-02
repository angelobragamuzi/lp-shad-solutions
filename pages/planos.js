export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/#formulario",
            permanent: false,
        },
    };
}

export default function PlanosRedirect() {
    return null;
}
