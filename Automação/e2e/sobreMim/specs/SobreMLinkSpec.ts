import { protractor, browser, by, element } from "protractor";
import { SobreMLink } from "../page-objects/SobreMLink.js";

describe("Teste sobre a página Sobre Mim: Links", () => {

    const link = new SobreMLink()

    describe("Verificação da página Sobre Mim", () => {

        beforeAll(() => {
            browser.get(browser.baseUrl)
            browser.sleep(800)
        })

        it("Verificação do link Sobre Mim", () => {

            link.acessoSobreMim()
            expect(link.retornaSobreMim()).toEqual('Sobre Mim');
            browser.sleep(800)
        })
    })
    
    describe("Verificação dos links da página Sobre Mim", () => {

        afterEach(() => {

            browser.navigate().back()
            browser.sleep(800)
        })

        it("Verificão do link Home", () => {

            link.acessoHome()
            expect(link.retornaHome()).toEqual('BEM-VINDO AO MEU BLOG');
            browser.sleep(800)
        })
        
        it("Verificação do link Postagens", () => {
            
            link.acessoPostagens()
            expect(link.retornaPostagens()).toEqual('Postagens');
            browser.sleep(800)
        })

        it("Verificação do link Contato", () => {

            link.acessoContato()
            expect(link.retornaContato()).toEqual('Contato');
            browser.sleep(800)
        })

        it("Verificação do link Login", () => {

            link.acessoLogin()
            expect(link.retornaLogin()).toEqual('Login');
            browser.sleep(800)
        })
    })
})