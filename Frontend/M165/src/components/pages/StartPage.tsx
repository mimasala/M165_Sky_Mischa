import { useState } from "react";
import config from "../../models/config";
import Navbar from "../Navbar";

type props = {
    config : config;
}

function StartPage({config} : props) {
    const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);

    return (
        <div>
            <Navbar config={config} toolbarOpen={toolbarOpen} setToolbarOpen={setToolbarOpen} />
        </div>
    );
}

export default StartPage;