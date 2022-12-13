type configElement = {
    text: string;
    url: string;
    img?: string;
}

type config = {
    navbar: configElement[];
    toolbar: configElement[];
}

export default config;