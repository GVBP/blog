"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContatoPage_1 = require("./../page-objects/ContatoPage");
const protractor_1 = require("protractor");
describe("Teste sobre a página Contato", () => {
    const contatoPage = new ContatoPage_1.ContatoPage();
    describe("Verificação da área do Contato", () => {
        beforeAll(() => {
            protractor_1.browser.get(protractor_1.browser.baseUrl);
            protractor_1.browser.sleep(800);
            contatoPage.acessoContato();
        });
        it("Verificação do campo nome", () => {
            contatoPage.digitaNome('Guilherme');
            expect(contatoPage.pegaNome()).toEqual('Guilherme');
            protractor_1.browser.sleep(800);
        });
        it("Verificação do campo e-mail", () => {
            contatoPage.digitaEmail('guilherme@teste.com');
            expect(contatoPage.pegaEmail()).toEqual('guilherme@teste.com');
            protractor_1.browser.sleep(800);
        });
        it("Verificação do campo mensagem", () => {
            contatoPage.digitaMensagem('Alguma mensagem...');
            expect(contatoPage.pegaMensagem()).toEqual('Alguma mensagem...');
            protractor_1.browser.sleep(800);
        });
        describe("Verificação do botão limpar", () => {
            beforeAll(() => {
                contatoPage.clickReset();
            });
            it("Verificação do campo nome, precisa estar vazio", () => {
                expect(contatoPage.pegaNome()).toEqual('');
                protractor_1.browser.sleep(800);
            });
            it("Verificação do campo e-mail, precisa estar vazio", () => {
                expect(contatoPage.pegaEmail()).toEqual('');
                protractor_1.browser.sleep(800);
            });
            it("Verificação do campo mensagem, precisa estar vazio", () => {
                expect(contatoPage.pegaMensagem()).toEqual('');
                protractor_1.browser.sleep(800);
            });
        });
        describe("Verificação do botão Enviar", () => {
            beforeAll(() => {
                contatoPage.digitaNome('Guilherme');
                contatoPage.digitaEmail('guilherme@teste.com');
                contatoPage.digitaMensagem('Alguma mensagem...');
                protractor_1.browser.sleep(800);
                contatoPage.clickEnviar();
            });
            it("Verificação do campo nome, precisa estar vazio", () => {
                expect(contatoPage.pegaNome()).toEqual('');
                protractor_1.browser.sleep(800);
            });
            it("Verificação do campo e-mail, precisa estar vazio", () => {
                expect(contatoPage.pegaEmail()).toEqual('');
                protractor_1.browser.sleep(800);
            });
            it("Verificação do campo mensagem, precisa estar vazio", () => {
                expect(contatoPage.pegaMensagem()).toEqual('');
                protractor_1.browser.sleep(800);
            });
        });
    });
});
