import { Page, BrowserContext, Locator } from '@playwright/test'
import {appointmentpage} from '@repo/elements.json'
import { exit } from 'process'


export default class AppointmentPage {

    constructor(public page: Page, public context: BrowserContext) { }

    public waitForAppointmentPage=async():Promise<void>=> {
        this.page.waitForSelector(appointmentpage.headAppointment)
    }

    public fillAppointmentDetails = async (data:{[key: string]: any}):Promise<void> => {
        await this.page.selectOption(appointmentpage.ddlFacility, data["facility"])
        if(data["readmission"]){
            await this.page.check(appointmentpage.chkReadmission)
        }
        const rdbs: Locator[] = await this.page.locator(appointmentpage.rdbProgram).all()
        for(let rdb of rdbs){
            if(await rdb.innerText() ===data["healthcare"]){
                await rdb.click()
                exit
            }
        }
        await this.page.click(appointmentpage.btnCal)
        await this.page.click(appointmentpage.btnNext)
        const dates:Locator[] = await this.page.locator(appointmentpage.tblDate).all()
        for(let date of dates){
            if(await date.innerText() === data["date"]){
                await date.click()
                exit
            }
        }
        await this.page.fill(appointmentpage.txtComment, data["comment"])
    }

    public clickBookAppointment=async ():Promise<void> => {
        await this.page.click(appointmentpage.btnBookAppointment)
    }
}