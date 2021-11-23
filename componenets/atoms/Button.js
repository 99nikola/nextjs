import { Button as MButton } from "@mui/material";
import { memo } from "react";


const Button = (props) => {
    return (
        <MButton 
            variant={props.variant}
            color={props.color}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            >
            {props.children}
        </MButton>
    );
}

Button.defaultProps = {
    variant: "contained",
    color: "primary",
    type: "button",
    disabled: false
}

export default memo(Button);