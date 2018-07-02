"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ContatoLinks_1 = require("../page-objects/ContatoLinks");
describe("Teste sobre a página Contato: Links", () => {
    const link = new ContatoLinks_1.ContatoLinks();
    describe("Verificação da página Contato", () => {
        beforeAll(() => {
            protractor_1.browser.get(protractor_1.browser.baseUrl);
            protractor_1.browser.sleep(800);
        });
        it("Verificação do link Contato", () => {
            link.acessoContato();
            expect(link.retornaContato()).toEqual('Contato');
            protractor_1.browser.sleep(800);
        });
    });
    describe("Verificação dos links da página Contato", () => {
        afterEach(() => {
            protractor_1.browser.navigate().back();
            protractor_1.browser.sleep(800);
        });
        it("Verificão do link Home", () => {
            link.acessoHome();
            expect(link.retornaHome()).toEqual('BEM-VINDO AO MEU BLOG');
            protractor_1.browser.sleep(800);
        });
        it("Verificação do link Postagens", () => {
            link.acessoPostagens();
            expect(link.retornaPostagens()).toEqual('Postagens');
            protractor_1.browser.sleep(800);
        });
        it("Verificação do link Sobre Mim", () => {
            link.acessoSobreMim();
            expect(link.retornaSobreMim()).toEqual('Sobre Mim');
            protractor_1.browser.sleep(800);
        });
        it("Verificação do link Login", () => {
            link.acessoLogin();
            expect(link.retornaLogin()).toEqual('Login');
            protractor_1.browser.sleep(800);
        });
    });
});
