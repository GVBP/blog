"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--incognito'
            ],
        },
    },
    specs: ['../contato/specs/ContatoSpec.js', '../contato/specs/ContatoLinkSpec.js'],
    baseUrl: 'http://localhost:3000/',
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
    }
};
