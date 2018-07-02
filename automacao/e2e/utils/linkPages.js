"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LinkPages {
    constructor() {
        this.EC = protractor_1.ExpectedConditions;
        this.linkC = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Contato'));
        this.titleC = protractor_1.element(protractor_1.by.tagName('h1'));
        this.linkH = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Home'));
        this.titleH = protractor_1.element(protractor_1.by.tagName('h1'));
        this.linkP = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Postagens'));
        this.titleP = protractor_1.element(protractor_1.by.tagName('h1'));
        this.linkSM = protractor_1.element(protractor_1.by.cssContainingText('.nav-link', 'Sobre Mim'));
        this.titleSM = protractor_1.element(protractor_1.by.tagName('h1'));
        this.btnLogin = protractor_1.element(protractor_1.by.cssContainingText('.btn-login', 'Login'));
        this.tLogin = protractor_1.element(protractor_1.by.tagName('h1'));
    }
    acessoContato() {
        this.linkC.click().then(() => {
            protractor_1.browser.wait(this.EC.visibilityOf(this.titleC), 5000, 'Label não apareceu na tela');
        });
    }
    retornaContato() {
        return this.titleC.getText();
    }
    acessoHome() {
        this.linkH.click().then(() => {
            protractor_1.browser.wait(this.EC.visibilityOf(this.titleH), 5000, 'Label não apareceu na tela');
        });
    }
    retornaHome() {
        return this.titleH.getText();
    }
    acessoPostagens() {
        this.linkP.click().then(() => {
            protractor_1.browser.wait(this.EC.visibilityOf(this.titleP), 5000, 'Label não apareceu na tela');
        });
    }
    retornaPostagens() {
        return this.titleP.getText();
    }
    acessoSobreMim() {
        this.linkSM.click().then(() => {
            protractor_1.browser.wait(this.EC.visibilityOf(this.titleSM), 5000, 'Label não apareceu na tela');
        });
    }
    retornaSobreMim() {
        return this.titleSM.getText();
    }
    acessoLogin() {
        this.btnLogin.click().then(() => {
            protractor_1.browser.wait(this.EC.visibilityOf(this.tLogin), 5000, 'Label não apareceu na tela');
        });
    }
    retornaLogin() {
        return this.tLogin.getText();
    }
}
exports.LinkPages = LinkPages;
