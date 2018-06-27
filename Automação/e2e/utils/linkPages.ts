import { protractor, promise, browser, element, by, ElementFinder, ExpectedConditions } from "protractor"

/**
 * Page Object com métodos relacionados referentes a verificação de links.
 * @export HomeLinks
 * @export PostagemLinks
 * @export ContatoLinks
 * @export SobreMimLinks
 * @class linkPages
 */
export class LinkPages {

    private EC = ExpectedConditions

    private linkC: ElementFinder = element(by.cssContainingText('.nav-link', 'Contato'))
    private titleC: ElementFinder = element(by.tagName('h1'))
    private linkH: ElementFinder = element(by.cssContainingText('.nav-link', 'Home'))
    private titleH: ElementFinder = element(by.tagName('h1'))
    private linkP: ElementFinder = element(by.cssContainingText('.nav-link', 'Postagens'))
    private titleP: ElementFinder = element(by.tagName('h1'))
    private linkSM: ElementFinder = element(by.cssContainingText('.nav-link', 'Sobre Mim'))
    private titleSM: ElementFinder = element(by.tagName('h1'))
    private btnLogin: ElementFinder = element(by.cssContainingText('.btn-login', 'Login'))
    private tLogin: ElementFinder = element(by.tagName('h1'))

    /**
     * Clica no link que acessará a página contato
     * @memberof LinkPages
     */
    public acessoContato(): void {

        this.linkC.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleC), 5000, 'Label não apareceu na tela')
        })

    }

    /**
     * Retorna um Titúlo como garantia de acesso a página Contato
     * @memberof LinkPages
     * @return {Promise<String>} Titúlo da página Contato
     */
    public retornaContato(): promise.Promise<String> {

        return this.titleC.getText()
    }

    /**
     * Acessa a página Home
     * @memberof LinkPages
     */
    public acessoHome(): void {

        this.linkH.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleH), 5000, 'Label não apareceu na tela')
        })

    }

    /**
     * Retorna um Titúlo como garantia de acesso a página Home
     * @memberof LinkPages
     * @return {Promise<String>} Titúlo da página Home
     */
    public retornaHome(): promise.Promise<String> {

        return this.titleH.getText()
    }

    /**
     * Acessa a página Postagens
     * @memberof LinkPages
     */
    public acessoPostagens(): void {

        this.linkP.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleP), 5000, 'Label não apareceu na tela')
        })

    }

    /**
     * Retorna um Titúlo como garantia de acesso a página Postagens
     * @memberof LinkPages
     * @return {Promise<String>} Titúlo da página Postagens
     */
    public retornaPostagens(): promise.Promise<String> {

        return this.titleP.getText()
    }

    /**
     * Acessa a página Sobre Mim
     * @memberof LinkPages
     */
    public acessoSobreMim(): void {

        this.linkSM.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleSM), 5000, 'Label não apareceu na tela')
        })

    }

    /**
     * Retorna um Titúlo como garantia de acesso a página Sobre Mim
     * @memberof LinkPages
     * @return {Promise<String>} Titúlo da página Sobre Mim
     */
    public retornaSobreMim(): promise.Promise<String> {

        return this.titleSM.getText()
    }

    /**
     * Acessa a página Login
     * @memberof LinkPages
     */
    public acessoLogin(): void {

        this.btnLogin.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.tLogin), 5000, 'Label não apareceu na tela')
        })

    }

    /**
     * Retorna um Titúlo como garantia de acesso a página Login
     * @memberof LinkPages
     * @return {Promise<String>} Titúlo da página Login
     */
    public retornaLogin(): promise.Promise<String> {

        return this.tLogin.getText()
    }

}