import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton } from "@mui/material";

type props = {
    onClick ? : (e : any) => void;
    text : string;
    href :string;
}

function DynamicToolbarButton({text, onClick, href} : props) {


    return (
        <Box>
            <Button href={href}>
                {text}
            </Button>
        </Box>
    );
}

export default DynamicToolbarButton;