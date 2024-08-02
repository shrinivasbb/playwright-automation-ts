import { test as base, expect as expect, 
    defineConfig as defineConfig, FullConfig as FullConfig } from '@playwright/test'
import LoginPage from 'src/pom/login_page'
import LandingPage from 'src/pom/landing_page'
import AppointmentPage from 'src/pom/appointment_page'
import ConfirmationPage from 'src/pom/confirmation_page'



export const test = base.extend<{landingPage: LandingPage ,loginPage:LoginPage, 
    appointmentPage:AppointmentPage, confirmationPage: ConfirmationPage}>({

    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context))
    },

    landingPage: async ({ page, context }, use) => {
        await use(new LandingPage(page, context))
    },

    appointmentPage: async ({ page, context }, use) => {
        await use(new AppointmentPage(page, context))
    },

    confirmationPage: async ({ page, context }, use) => {
        await use(new ConfirmationPage(page, context))
    },
})

    export { expect, FullConfig }