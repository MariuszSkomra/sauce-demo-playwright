import { Locator, Page } from "@playwright/test"

export class LoginPage {

    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.errorMessage = page.locator(".error-message-container")
    }

    goto = async (): Promise<void> => { await this.page.goto("https://www.saucedemo.com/") }

    loginAs = async (username: string, password: string): Promise<void> => {
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.loginButton.click()
    }
}
