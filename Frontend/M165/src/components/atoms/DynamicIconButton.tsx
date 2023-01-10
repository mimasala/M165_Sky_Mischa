import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";

type props = {
    onClick ? : (e : any) => void;
    icon ?: "Menu";
    imgSrc ?: string;
    imgAltText ?: string;
}

function DynamicIconButton({onClick, icon, imgSrc, imgAltText} : props) {
    if (!icon && (!imgSrc && !imgAltText)) {
        throw new Error("Nothing to show provided")
    }

    let content;

    if (icon) {
        content = <MenuIcon />
    } else {
        content = <img src={imgSrc} alt={imgAltText} />
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClick}
        >
            { content }
        </IconButton>
    );
}

export default DynamicIconButton;