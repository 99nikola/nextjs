import { Typography } from "@mui/material"

const CompanyInfo = (props) => {
    return (
        <div>
            <Typography variant="body2">
                Name: {props.name}
            </Typography>

            <Typography variant="body2">
                CatchPhrase: {props.catchPhrase}
            </Typography>

            <Typography variant="body2">
                BS: {props.bs}
            </Typography>
        </div>
    )
}

export default CompanyInfo