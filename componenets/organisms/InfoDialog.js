import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { DialogActions, DialogContent } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '../atoms/Button';
import UserInfo from '../molecules/UserInfo';


const InfoDialog = (props) => {

    const handleOpen = () => {
        props.setOpen(true);
    }

    const handleClose = () => {
        props.setOpen(false);
    }
  return (
    <>
        <Button onClick={handleOpen} color="info">
            <VisibilityIcon/>
        </Button>
        
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>User info</DialogTitle>
            
            <DialogContent>
                <UserInfo 
                    id={props.id}
                    user={props.user}
                    />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="info">OK</Button>
            </DialogActions>
        </Dialog>
    </>
    );
}

export default InfoDialog;