import { Paper, TableContainer, Table as MuiTable } from "@mui/material"
import TableHeader from "../atoms/TableHeader"
import TableBody  from "../atoms/TableBody";


const Table = (props) => {
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHeader header={props.header} />
                <TableBody body={props.body} />
            </MuiTable>
        </TableContainer>
    )
}

export default Table