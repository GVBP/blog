import { protractor, promise, browser, element, by, ElementFinder } from "protractor"

export class ContatoPage {

    private link: ElementFinder = element(by.cssContainingText('.nav-link', 'Contato'))
    private title: ElementFinder = element(by.tagName('h1'))
    private nome: ElementFinder = element(by.id('uNome'))
    private email: ElementFinder = element(by.id('uEmail'))

    public acessoContato(): void {

        this.link.click().then(() => {
            console.log("Cliquei")
        })

    }

    public retornaContato(): promise.Promise<String> {

        return this.title.getText()

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

}