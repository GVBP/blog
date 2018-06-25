import { ContatoPage } from "./../page-objects/ContatoPage"
import { protractor, browser, by, element } from "protractor";

describe("Verificação da página Contato", () => {

    const contatoPage = new ContatoPage()
    
    beforeAll(() => {
        
        browser.get(browser.baseUrl)

        browser.sleep(1000)

        contatoPage.acessoContato()

    })

    it ("Acessa Contato", () => {

        expect(contatoPage.retornaContato()).toEqual('Contato');

        browser.sleep(1500)

    })

    it ("Escreve nome e e-mail", () => {

        contatoPage.digitaNome('Guilherme')
        contatoPage.digitaEmail('guilherme@teste.com')

        expect(contatoPage.pegaNome()).toEqual('Guilherme');
        expect(contatoPage.pegaEmail()).toEqual('guilherme@teste.com');

        browser.sleep(1000)
    })

})

