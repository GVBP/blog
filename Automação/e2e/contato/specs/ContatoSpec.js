"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContatoPage_1 = require("./../page-objects/ContatoPage");
const protractor_1 = require("protractor");
describe("teste", () => {
    const contatoPage = new ContatoPage_1.ContatoPage();
    beforeAll(() => {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        protractor_1.browser.sleep(2000);
    });
    it("Acessa Contato", () => {
        contatoPage.acessoContato();
        expect(contatoPage.retornaContato()).toEqual('Contato');
        protractor_1.browser.sleep(4000);
    });
});
