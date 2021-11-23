import { TableCell } from "@mui/material"
import InfoDialog from "../organisms/InfoDialog";
import { useState } from "react";
import TableRow from "../atoms/table-row/TableRow";
import Button from "../atoms/Button";
import { useRouter } from "next/router";
import ListIcon from "../../res/list.svg";

const UserRow = ({ user }) => {

    const [ open, setOpen ] = useState(false);
    const router = useRouter();

    const handleRedirectToPosts = () => {
        router.push(`/posts?userId=${user.id}`);
    }

    return (
        <TableRow
            key={user.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {user.name}
            </TableCell>
            <TableCell align="right">{user.phone}</TableCell>
            <TableCell align="right">
                <InfoDialog 
                    open={open}
                    setOpen={setOpen}
                    id={user.id}
                    user={user}
                    />
            </TableCell>
            <TableCell align="right">
                <Button color="warning" onClick={handleRedirectToPosts}>
                    <ListIcon />
                </Button>
            </TableCell>

        </TableRow>
    )
}

export default UserRow