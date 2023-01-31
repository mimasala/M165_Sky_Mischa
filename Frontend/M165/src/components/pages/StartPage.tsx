import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../models/config";
import Navbar from "../Navbar";
import Toolbar from "../Toolbar";

type props = {
    config : config;
}

function StartPage({config} : props) {
    const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div>
            <Navbar config={config} toolbarOpen={toolbarOpen} setToolbarOpen={setToolbarOpen} />
            <Toolbar config={config} setToolbarOpen={setToolbarOpen} toolbarOpen={toolbarOpen} />
            {
                config.modules.map((elem) => {
                    return (
                        <Card sx={{ minWidth: 275, backgroundColor: "#FFFFFF" }} key={elem.name} onClick={() => {navigate(elem.name)}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {elem.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default StartPage;