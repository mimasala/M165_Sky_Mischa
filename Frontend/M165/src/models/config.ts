import { type } from "os";

export type navbarElement = {
    text: string
    url: string
    img?: string
}
export type toolbarElement = {
    text: string
    url: string
}

export type module = {
    name : string
    backendUrl: string
    fields: field[]
}

export type field = {
    type: "string" | "number"
    name: string
}

type config = {
    navbar: navbarElement[]
    toolbar: toolbarElement[]
    modules: module[]
}

export default config;