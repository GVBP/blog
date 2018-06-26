"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ContatoLinks_1 = require("../page-objects/ContatoLinks");
describe("Teste sobre a página Contato: Links", () => {
    const contatoLink = new ContatoLinks_1.ContatoLinks();
    describe("Verificação da página Contato", () => {
        beforeAll(() => {
            protractor_1.browser.get(protractor_1.browser.baseUrl);
            protractor_1.browser.sleep(1000);
            contatoLink.acessoContato();
        });
        afterEach(() => {
            contatoLink.acessoContato();
            protractor_1.browser.sleep(1000);
        });
        it("Acessa Contato", () => {
            expect(contatoLink.retornaContato()).toEqual('Contato');
            protractor_1.browser.sleep(1000);
        });
        it("Verificação do link Home", () => {
            contatoLink.acessoHome();
            expect(contatoLink.retornaHome()).toEqual('BEM-VINDO AO MEU BLOG');
            protractor_1.browser.sleep(1000);
        });
        it("Verificação do link Postagens", () => {
            contatoLink.acessoPostagens();
            expect(contatoLink.retornaPostagens()).toEqual('Postagens');
            protractor_1.browser.sleep(1000);
        });
        it("Verificação do link Sobre Mim", () => {
            contatoLink.acessoSobreMim();
            expect(contatoLink.retornaSobreMim()).toEqual('Sobre Mim');
            protractor_1.browser.sleep(1000);
        });
        it("Verificação do link Login", () => {
            contatoLink.acessoLogin();
            expect(contatoLink.retornaLogin()).toEqual('Login');
            protractor_1.browser.sleep(1000);
            protractor_1.browser.navigate().back();
        });
    });
});
