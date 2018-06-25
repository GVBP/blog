"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ContatoPage {
    acessoContato() {
        let elm = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Contato'));
        elm.click().then(() => {
            console.log("Cliquei");
        });
    }
    retornaContato() {
        let elm = protractor_1.element(protractor_1.by.tagName('h1'));
        return elm.getText();
    }
}
exports.ContatoPage = ContatoPage;
