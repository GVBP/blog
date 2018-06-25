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

    specs: ['../contato/specs/ContatoSpec.js'],

    baseUrl: 'http://localhost:3000/',

    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }

}