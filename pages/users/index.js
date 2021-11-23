import UsersTable from "../../componenets/templates/UsersTable";
import Head from "next/head";

const Users = ({ users }) => {
    return (
        <div>
            <Head>
                <title>All users</title>
            </Head>
            <UsersTable users={users} />
        </div>
    )
}

export const getServerSideProps = async () => {

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/users");
    const users = await response.json();

    return ({
        props: {
            users
        }
    });
}

export default Users
