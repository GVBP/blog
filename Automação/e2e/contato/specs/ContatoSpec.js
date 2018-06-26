"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContatoPage_1 = require("./../page-objects/ContatoPage");
const protractor_1 = require("protractor");
describe("Verificação da página Contato", () => {
    const contatoPage = new ContatoPage_1.ContatoPage();
    beforeEach(() => {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        protractor_1.browser.sleep(1000);
        contatoPage.acessoContato();
    });
    it("Acessa Contato", () => {
        expect(contatoPage.retornaContato()).toEqual('Contato');
        protractor_1.browser.sleep(1500);
    });
    it("Escreve nome", () => {
        contatoPage.digitaNome('Guilherme');
        expect(contatoPage.pegaNome()).toEqual('Guilherme');
        protractor_1.browser.sleep(1000);
    });
    it("Escreve E-mail", () => {
        contatoPage.digitaEmail('guilherme@teste.com');
        expect(contatoPage.pegaEmail()).toEqual('guilherme@teste.com');
        protractor_1.browser.sleep(1000);
    });
});
