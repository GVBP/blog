import { ContatoPage } from "./../page-objects/ContatoPage"
import { protractor, browser, by, element } from "protractor";

describe("Teste sobre a página Contato", () => {

    const contatoPage = new ContatoPage()

    describe("Verificação da área do Contato", () => {

        beforeAll(() => {

            browser.get(browser.baseUrl)
            browser.sleep(1000)
            contatoPage.acessoContato()
        })

        it("Verificação do campo nome", () => {

            contatoPage.digitaNome('Guilherme')
            expect(contatoPage.pegaNome()).toEqual('Guilherme')
            browser.sleep(1000)
        })

        it("Verificação do campo e-mail", () => {

            contatoPage.digitaEmail('guilherme@teste.com')
            expect(contatoPage.pegaEmail()).toEqual('guilherme@teste.com')
            browser.sleep(1000)
        })

        it("Verificação do campo mensagem", () => {

            contatoPage.digitaMensagem('Alguma mensagem...')
            expect(contatoPage.pegaMensagem()).toEqual('Alguma mensagem...')
            browser.sleep(1000)
        })

        describe("Verificação do botão limpar", () => {
          
            beforeAll(() => {

                contatoPage.clickReset()
            })

            it("Verificação do campo nome, precisa estar vazio", () => {

                expect(contatoPage.pegaNome()).toEqual('')
                browser.sleep(1000)
            })

            it("Verificação do campo e-mail, precisa estar vazio", () => {

                expect(contatoPage.pegaEmail()).toEqual('')
                browser.sleep(1000)
            })

            it("Verificação do campo mensagem, precisa estar vazio", () => {

                expect(contatoPage.pegaMensagem()).toEqual('')
                browser.sleep(1000)
            })
        })

        describe("Verificação do botão Enviar", () => {
          
            beforeAll(() => {

                contatoPage.digitaNome('Guilherme')
                contatoPage.digitaEmail('guilherme@teste.com')
                contatoPage.digitaMensagem('Alguma mensagem...')
                browser.sleep(1000)
                contatoPage.clickEnviar()
            })

            it("Verificação do campo nome, precisa estar vazio", () => {

                expect(contatoPage.pegaNome()).toEqual('')
                browser.sleep(1000)
            })

            it("Verificação do campo e-mail, precisa estar vazio", () => {

                expect(contatoPage.pegaEmail()).toEqual('')
                browser.sleep(1000)
            })

            it("Verificação do campo mensagem, precisa estar vazio", () => {

                expect(contatoPage.pegaMensagem()).toEqual('')
                browser.sleep(1000)
            })
        })

    })
})