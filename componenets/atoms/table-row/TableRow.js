import { TableRow as MuiTableRow } from "@mui/material";
import classes from "./row.module.css";

const TableRow = ({ children, ...other }) => {
    return (
        <MuiTableRow {...other} className={classes.row}>
            {children}
        </MuiTableRow>
    )
}

export default TableRow
