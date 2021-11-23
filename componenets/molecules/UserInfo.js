import { Grid, Typography } from "@mui/material";
import AddressInfo from "../atoms/CompanyInfo";
import CompanyInfo from "../atoms/CompanyInfo";


const UserInfo = ({ user }) => {

    return (
    <>
      {user && (
        <div>
            <Typography variant="body1">
                Name: {user.name}
            </Typography>

            <Typography variant="body1">
                Phone: {user.phone}
            </Typography>

            <Typography variant="body1">
                Website: {user.website}
            </Typography>

            <Typography variant="body1">
                Email: {user.email}
            </Typography>

            <Typography variant="body1" paddingBottom="3px">
                User: {user.username}
            </Typography>

            <Typography>
                Address:
            </Typography>
                <Grid container paddingLeft="10%">
                    <AddressInfo 
                        {...user.address}
                        />
                </Grid>

            <Typography>
                Company:
            </Typography>
                <Grid container paddingLeft="10%">
                    <CompanyInfo 
                        {...user.company}
                        />
                </Grid>
            
        </div>
      )}  
    </>
    )
}

export default UserInfo