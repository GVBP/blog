import { protractor, promise, browser, element, by, ElementFinder, ExpectedConditions } from "protractor"

export class ContatoPage {

    private EC = ExpectedConditions
    private link: ElementFinder = element(by.cssContainingText('.nav-link', 'Contato'))
    private nome: ElementFinder = element(by.id('uNome'))
    private email: ElementFinder = element(by.id('uEmail'))
    private mensagem: ElementFinder = element(by.id('uTextArea'))
    private bReset: ElementFinder = element(by.id('bReset'))
    private bEnviar: ElementFinder = element(by.id('sPost'))

    public acessoContato(): void {

        this.link.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.nome), 5000, 'Label não apareceu na tela')
        })

    }

    public digitaNome(n: string): void {

        this.nome.sendKeys(n)
    }

    public pegaNome(): promise.Promise<String> {

        return this.nome.getAttribute('value')
    }

    public digitaEmail(e: string): void {

        this.email.sendKeys(e)
    }

    public pegaEmail(): promise.Promise<String> {

        return this.email.getAttribute('value')
    }

    public digitaMensagem(m: string): void {

        this.mensagem.sendKeys(m)
    }

    public pegaMensagem(): promise.Promise<String> {

        return this.mensagem.getAttribute('value')
    }

    public clickReset(): void {

        this.bReset.click().then(() => {
            console.log("Botão Limpar executado")
        })
    }

    public clickEnviar(): void {

        this.bEnviar.click().then(() => {
            console.log("Botão Enviar executado")
        })
    }
}