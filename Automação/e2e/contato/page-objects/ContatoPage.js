"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ContatoPage {
    constructor() {
        this.link = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Contato'));
        this.title = protractor_1.element(protractor_1.by.tagName('h1'));
        this.nome = protractor_1.element(protractor_1.by.id('uNome'));
        this.email = protractor_1.element(protractor_1.by.id('uEmail'));
    }
    acessoContato() {
        this.link.click().then(() => {
            console.log("Cliquei");
        });
    }
    retornaContato() {
        return this.title.getText();
    }
    digitaNome(n) {
        this.nome.sendKeys(n);
    }
    pegaNome() {
        return this.nome.getAttribute('value');
    }
    digitaEmail(e) {
        this.email.sendKeys(e);
    }
    pegaEmail() {
        return this.email.getAttribute('value');
    }
}
exports.ContatoPage = ContatoPage;
