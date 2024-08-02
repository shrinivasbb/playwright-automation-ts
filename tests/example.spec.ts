import { test, expect } from 'src/fixtures/cura_app';
import { before } from 'node:test';
import {data} from '@testdata/appointment.json'

test.beforeEach(async({page}) => {
    await page.goto('/')
})
test('Login', async ({ loginPage, landingPage, appointmentPage, confirmationPage }) => {
    await landingPage.clickLoginOption('Login');
    await loginPage.performLogin('John Doe', 'ThisIsNotAPassword');
    await appointmentPage.waitForAppointmentPage()
    await appointmentPage.fillAppointmentDetails(data)
    await appointmentPage.clickBookAppointment()
    await confirmationPage.waitForConfirmationPage()
    await confirmationPage.verifyConfirmationPage(data)
});



