import { protractor, promise, browser, element, by, ElementFinder, ExpectedConditions } from "protractor"

export class ContatoLinks {

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

    public acessoContato(): void {

        this.linkC.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleC), 5000, 'Label não apareceu na tela')
        })

    }

    public retornaContato(): promise.Promise<String> {

        return this.titleC.getText()
    }

    public acessoHome(): void {

        this.linkH.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleH), 5000, 'Label não apareceu na tela')
        })

    }

    public retornaHome(): promise.Promise<String> {

        return this.titleH.getText()
    }

    public acessoPostagens(): void {

        this.linkP.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleP), 5000, 'Label não apareceu na tela')
        })

    }

    public retornaPostagens(): promise.Promise<String> {

        return this.titleP.getText()
    }

    public acessoSobreMim(): void {

        this.linkSM.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.titleSM), 5000, 'Label não apareceu na tela')
        })

    }

    public retornaSobreMim(): promise.Promise<String> {

        return this.titleSM.getText()
    }

    public acessoLogin(): void {

        this.btnLogin.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.tLogin), 5000, 'Label não apareceu na tela')
        })

    }

    public retornaLogin(): promise.Promise<String> {

        return this.tLogin.getText()
    }

}