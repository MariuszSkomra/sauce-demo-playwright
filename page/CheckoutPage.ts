import { Locator, Page } from "@playwright/test"

export class CheckoutPage {

    readonly page: Page
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postalCodeInput: Locator
    readonly continueButton: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.firstNameInput = page.locator("#first-name")
        this.lastNameInput = page.locator("#last-name")
        this.postalCodeInput = page.locator("#postal-code")
        this.continueButton = page.locator("#continue")
        this.errorMessage = page.locator(".error-message-container")
    }

    goto = async (): Promise<void> => {
        await this.page.goto("/checkout-step-one.html")
    }

    fillFormAndSubmit = async (args: { firstName: string, lastName: string, postalCode: string }): Promise<void> => {
        await this.firstNameInput.fill(args.firstName)
        await this.lastNameInput.fill(args.lastName)
        await this.postalCodeInput.fill(args.postalCode)
        await this.continueButton.click()
    }
}
