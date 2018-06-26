import { ContatoPage } from "./../page-objects/ContatoPage"
import { protractor, browser, by, element } from "protractor";

describe("Verificação da página Contato", () => {

    const contatoPage = new ContatoPage()
    
    beforeEach(() => {
        
        browser.get(browser.baseUrl)

        browser.sleep(1000)

        contatoPage.acessoContato()

    })

    it ("Acessa Contato", () => {

        expect(contatoPage.retornaContato()).toEqual('Contato');

        browser.sleep(1500)

    })

    it ("Escreve nome", () => {

        contatoPage.digitaNome('Guilherme')

        expect(contatoPage.pegaNome()).toEqual('Guilherme')

        browser.sleep(1000)
    })

    it ("Escreve E-mail", () => {

        contatoPage.digitaEmail('guilherme@teste.com')

        expect(contatoPage.pegaEmail()).toEqual('guilherme@teste.com')

        browser.sleep(1000)
    })

})