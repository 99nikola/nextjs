import UserInfo from "../../componenets/molecules/UserInfo";
import Head from "next/head";

const User = ({ user }) => {
    return (
    <>
        <Head>
            <title>{user.name}</title>
        </Head>
        <UserInfo user={user} />
    </>
    );
}

export const getServerSideProps = async (context) => {

    const userId = context.params.userId;
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/users/" + userId);
    const user = await response.json();

    return ({
        props: {
            user
        }
    })
}

export default User
