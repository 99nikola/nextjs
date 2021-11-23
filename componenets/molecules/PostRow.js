import { TableCell } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import TableRow from "../atoms/table-row/TableRow";


const PostRow = ({ post }) => {

    const [ postedByName, setPostedByName ] = useState(post.userId);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/users/" + post.userId);
                const user = await response.json();
                setPostedByName(user.name);
            } catch (err) {
                console.error(err);
            }
        })()
    }, []);

    const OtherCells = useMemo(() => (  // ? potrebno ?
    <>
        <TableCell align="right">
                {post.title}
            </TableCell>
            <TableCell align="right">
                {post.body}
            </TableCell>
    </>
    ), [post.title, post.body]);

    return (
        <TableRow
            key={post.id}
            >
            <TableCell component="td" scope="row">
                {postedByName}
            </TableCell>
            {OtherCells}
        </TableRow>
    )
}

export default PostRow
