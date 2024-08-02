import {Page, BrowserContext } from "@playwright/test"
import {loginpage} from '@repo/elements.json'

export default class LoginPage {
    constructor(public page:Page, public context:BrowserContext){}

    public performLogin = async(username:string, password:string):Promise<void> => {
        await this.page.fill(loginpage.txtUsername, username)
        await this.page.fill(loginpage.txtPassword, password)
        await this.page.click(loginpage.btnLogin)
    }
}