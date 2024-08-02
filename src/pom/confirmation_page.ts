import { Page, expect, BrowserContext } from "@playwright/test";
import { confirmationpage } from "@repo/elements.json"


export default class ConfirmationPage {

    constructor(public page: Page, public context: BrowserContext) { }

    public waitForConfirmationPage = async (): Promise<void> => {
        this.page.waitForSelector(confirmationpage.headConfirmation)
    }

    public verifyConfirmationPage = async (data:{[key:string]:any}): Promise<void> => {
        expect(await this.page.innerText(confirmationpage.lblFacility)).toBe(data["facility"])
        data["readmission"] === false ? expect(await this.page.innerText(confirmationpage.lblReadmission)).toBe('No') :
            expect(await this.page.innerText(confirmationpage.lblReadmission)).toBe('Yes')
        expect(await this.page.innerText(confirmationpage.lblProgram)).toBe(data["healthcare"])
        expect(await this.page.innerText(confirmationpage.lblDate)).toContain(data["date"])
        expect(await this.page.innerText(confirmationpage.lblComment)).toBe(data["comment"])
    }


}