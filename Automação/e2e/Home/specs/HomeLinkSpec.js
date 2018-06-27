"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomeLink_js_1 = require("../page-objects/HomeLink.js");
describe("Teste sobre a página Home: Links", () => {
    const link = new HomeLink_js_1.HomeLinks();
    describe("Verificação da página Home", () => {
        beforeAll(() => {
            protractor_1.browser.get(protractor_1.browser.baseUrl);
            protractor_1.browser.sleep(800);
        });
        it("Verificão do link Home", () => {
            link.acessoHome();
            expect(link.retornaHome()).toEqual('BEM-VINDO AO MEU BLOG');
            protractor_1.browser.sleep(800);
        });
    });
    describe("Verificação dos links da página Home", () => {
        afterEach(() => {
            protractor_1.browser.navigate().back();
            protractor_1.browser.sleep(800);
        });
        it("Verificação do link Postagens", () => {
            link.acessoPostagens();
            expect(link.retornaPostagens()).toEqual('Postagens');
            protractor_1.browser.sleep(800);
        });
        it("Verificação do link Contato", () => {
            link.acessoContato();
            expect(link.retornaContato()).toEqual('Contato');
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
