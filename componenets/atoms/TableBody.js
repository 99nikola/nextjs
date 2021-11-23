import { TableBody as MuiTableBody } from "@mui/material"


const TableBody = (props) => {
    return (
        <MuiTableBody>
            {props.body}
        </MuiTableBody>
    );
}

export default TableBody