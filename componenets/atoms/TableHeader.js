import { TableCell, TableHead } from "@mui/material"
import { useMemo } from "react"
import TableRow from "./table-row/TableRow";


const TableHeader = (props) => {

    const RowMemo = useMemo(() => (
        <TableRow>
            {props.header.map((cell, index) => (
                <TableCell key={cell} align={index === 0 ? undefined : "right"}>{cell}</TableCell>
            ))}
        </TableRow>
    ), [props.header]);

    return (
        <TableHead>
            {RowMemo}
        </TableHead>
    )
}

export default TableHeader