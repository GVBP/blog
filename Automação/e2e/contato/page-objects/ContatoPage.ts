import { protractor, promise, browser, element, by} from "protractor"

export class ContatoPage {

    public acessoContato (): void {

        let elm = element(by.cssContainingText('.nav-link','Contato'))

        elm.click().then(() => {
            console.log("Cliquei")
        })

    }

    public retornaContato(): promise.Promise<String> {

        let elm = element(by.tagName('h1'))

        return elm.getText()

    }

    public digitaNome(nome: string): void {

        let elm = element(by.id('#uNome'))

        elm.sendKeys(nome)
    }

    public digitaEmail(email: string): void {

        let elm = element(by.id('#uEmail'))

        elm.sendKeys(email)
    }

    public pegaNome(): promise.Promise<String> {

        let elm = element(by.id('#uNome'))

        return elm.getText()
    }

    public pegaEmail(): promise.Promise<String> {

        let elm = element(by.id('#uEmail'))

        return elm.getText()
    }

 }

