import { Page, BrowserContext, Locator } from "@playwright/test";
import {landing} from "@repo/elements.json"


export default class LandingPage{

    constructor(public page:Page, public context:BrowserContext){}

    public clickLoginOption= async (option:string):Promise<void> => {
        await this.page.click(landing.btnMenu)
        const mnuoptions:Locator[]  =await this.page.locator(landing.mnuSidenavOpts).all()  
        for(let mnu of mnuoptions){
            if (await mnu.innerText()===option){
                await mnu.click()
            }
        }
            
        
    }

}