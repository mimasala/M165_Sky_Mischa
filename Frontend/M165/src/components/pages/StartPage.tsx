import { useState } from "react";
import config from "../../models/config";
import Navbar from "../Navbar";
import { Drawer } from "@mui/material";
import Toolbar from "../Toolbar";

type props = {
    config : config;
}

function StartPage({config} : props) {
    const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);

    return (
        <div>
            <Navbar config={config} toolbarOpen={toolbarOpen} setToolbarOpen={setToolbarOpen} />
            <Toolbar config={config} setToolbarOpen={setToolbarOpen} toolbarOpen={toolbarOpen} />
        </div>
    );
}

export default StartPage;