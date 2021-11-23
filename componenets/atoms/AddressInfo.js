import { Typography } from "@mui/material"

const AddressInfo = (props) => {
    return (
        <div>
            <Typography variant="body2">
                City: {props.city}
            </Typography>
            
            <Typography variant="body2">
                Street: {props.street}
            </Typography>

            <Typography variant="body2">
                Zipcode: {props.zipcode}
            </Typography>

            <Typography variant="body2">
                Suite: {props.suite}
            </Typography>
        </div>
    )
}

export default AddressInfo