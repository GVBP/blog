"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ContatoPage {
    constructor() {
        this.EC = protractor_1.ExpectedConditions;
        this.link = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Contato'));
        this.nome = protractor_1.element(protractor_1.by.id('uNome'));
        this.email = protractor_1.element(protractor_1.by.id('uEmail'));
        this.mensagem = protractor_1.element(protractor_1.by.id('uTextArea'));
        this.bReset = protractor_1.element(protractor_1.by.id('bReset'));
        this.bEnviar = protractor_1.element(protractor_1.by.id('sPost'));
    }
    acessoContato() {
        this.link.click().then(() => {
            protractor_1.browser.wait(this.EC.visibilityOf(this.nome), 5000, 'Label não apareceu na tela');
        });
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
    digitaMensagem(m) {
        this.mensagem.sendKeys(m);
    }
    pegaMensagem() {
        return this.mensagem.getAttribute('value');
    }
    clickReset() {
        this.bReset.click().then(() => {
            console.log("Botão Limpar executado");
        });
    }
    clickEnviar() {
        this.bEnviar.click().then(() => {
            console.log("Botão Enviar executado");
        });
    }
}
exports.ContatoPage = ContatoPage;
