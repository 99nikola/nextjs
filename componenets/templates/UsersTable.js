import { useMemo, memo } from "react";
import Table from "../../componenets/organisms/Table";
import UserRow from "../../componenets/molecules/UsersRow";


const header = [ "Name", "Phone", "Inspect", "Posts" ];

const UsersTable = ({ users }) => {

    const UserList = useMemo(() => (
        users.map(user => (
            <UserRow 
                key={user.id}
                user={user}
                />
        ))
    ), [users]);

    return (
        <Table 
            header={header}
            body={UserList}
            />
    );
}

export default memo(UsersTable);