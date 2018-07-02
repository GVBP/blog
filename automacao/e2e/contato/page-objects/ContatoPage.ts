import { protractor, promise, browser, element, by, ElementFinder, ExpectedConditions } from "protractor"

/**
 * Page Object com métodos relacionados a tela de contato referentes a verificação de links.
 * 
 * @export
 * @class ContatoLinks
 */
export class ContatoPage {

    private EC = ExpectedConditions

    private link: ElementFinder = element(by.cssContainingText('.nav-link', 'Contato'))
    private nome: ElementFinder = element(by.id('uNome'))
    private email: ElementFinder = element(by.id('uEmail'))
    private mensagem: ElementFinder = element(by.id('uTextArea'))
    private bReset: ElementFinder = element(by.id('bReset'))
    private bEnviar: ElementFinder = element(by.id('sPost'))

    /**
     * Clica no link que acessará a página contato
     * @memberof ContatoPage
     */
    public acessoContato(): void {

        this.link.click().then(() => {
            browser.wait(this.EC.visibilityOf(this.nome), 5000, 'Label não apareceu na tela')
        })

    }

    /**
     * Preenche o campo do usuário
     * @memberof ContatoPage
     * @param {String} n Nome do usuário
     */
    public digitaNome(n: string): void {

        this.nome.sendKeys(n)
    }

    /**
     * Obtém o nome digitado no campo Nome
     * @memberof ContatoPage
     * @return {Promise<String>} Nome do usuário
     */
    public pegaNome(): promise.Promise<String> {

        return this.nome.getAttribute('value')
    }

    /**
     * Preenche o email do usuário
     * @memberof ContatoPage
     * @param {String} e E-mail do usuário
     */
    public digitaEmail(e: string): void {

        this.email.sendKeys(e)
    }

    /**
     * Obtém o email digitado no campo Email
     * @memberof ContatoLinks
     * @return {Promise<String>} E-mail do usuário
     */
    public pegaEmail(): promise.Promise<String> {

        return this.email.getAttribute('value')
    }

    /**
     * Preenche o email do usuário
     * @memberof ContatoPage
     * @param {String} e E-mail do usuário
     */
    public digitaMensagem(m: string): void {

        this.mensagem.sendKeys(m)
    }

    /**
     * Obtém o email digitado no campo Mensagem
     * @memberof ContatoPage
     * @return {Promise<String>} Mensagem do usuário
     */
    public pegaMensagem(): promise.Promise<String> {

        return this.mensagem.getAttribute('value')
    }

    /**
     * Executa o botão Reset
     * @memberof ContatoPage
     */
    public clickReset(): void {

        this.bReset.click().then(() => {
            console.log("Botão Limpar executado")
        })
    }

    /**
     * Executa o botão Enviar
     */
    public clickEnviar(): void {

        this.bEnviar.click().then(() => {
            console.log("Botão Enviar executado")
        })
    }
}