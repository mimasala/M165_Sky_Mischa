import urls from '../assets/site_names.json';
import {configAPI} from './API';

export const getNames = () : string[] => {
    return urls;
}
export const getConfigJson = (name: string) => {
    return configAPI.get("/modules/"+name+".cfg.json")
}