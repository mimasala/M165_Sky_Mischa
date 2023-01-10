type navbarElement = {
    text: string;
    url: string;
    img?: string;
}
type toolbarElement = {
    text: string
    url: string
}

type config = {
    navbar: navbarElement[];
    toolbar: toolbarElement[];
}

export default config;