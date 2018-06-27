import { Config, browser, protractor } from "protractor";

export let config: Config = {

    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--incognito'
            ],
        },
    },

    // specs: ['../Home/specs/HomeLinkSpec.js'],
    //specs: ['../Postagens/specs/PostagemLinkSpec.js'],
    specs: ['../contato/specs/ContatoSpec.js', '../contato/specs/ContatoLinkSpec.js'],
    // specs: ['../SobreMim/specs/SobreMLinkSpec.js'],

    baseUrl: 'http://localhost:3000/',

    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }

}