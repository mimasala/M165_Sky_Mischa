import { Button, TextField } from "@mui/material";
import config from "../../models/config";

type props = {
    config : config;
}

const OsuModule = ({config} : props) => {

    return (
        <div>
            <h1>{config.modules.at(0)?.name}</h1>
            {
                config.modules.at(0)?.fields.map((elem) => {
                    return (
                        <div>
                            <TextField label={elem.name} variant="outlined" sx={{backgroundColor:"white"}}></TextField>
                        </div>
                    )
                })
            }
            <Button onClick={() => {alert("error");}}>Save</Button>
        </div>
    )
}

export default OsuModule;