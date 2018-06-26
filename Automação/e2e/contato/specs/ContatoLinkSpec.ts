import { protractor, browser, by, element } from "protractor";
import { ContatoLinks } from "../page-objects/ContatoLinks";

describe("Teste sobre a página Contato: Links", () => {

    const contatoLink = new ContatoLinks()

    describe("Verificação da página Contato", () => {

        beforeAll(() => {

            browser.get(browser.baseUrl)
            browser.sleep(1000)
            contatoLink.acessoContato()
        })

        afterEach(() => {

            contatoLink.acessoContato()
            browser.sleep(1000)
        })

        it("Acessa Contato", () => {

            expect(contatoLink.retornaContato()).toEqual('Contato');
            browser.sleep(1000)
        })

        it("Verificação do link Home", () => {

            contatoLink.acessoHome()
            expect(contatoLink.retornaHome()).toEqual('BEM-VINDO AO MEU BLOG');
            browser.sleep(1000)
        })

        it("Verificação do link Postagens", () => {

            contatoLink.acessoPostagens()
            expect(contatoLink.retornaPostagens()).toEqual('Postagens');
            browser.sleep(1000)
        })

        it("Verificação do link Sobre Mim", () => {

            contatoLink.acessoSobreMim()
            expect(contatoLink.retornaSobreMim()).toEqual('Sobre Mim');
            browser.sleep(1000)
        })

        it("Verificação do link Login", () => {

            contatoLink.acessoLogin()
            expect(contatoLink.retornaLogin()).toEqual('Login');
            browser.sleep(1000)
            browser.navigate().back()
        })
    })
})