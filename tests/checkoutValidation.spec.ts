import { test, expect, Page } from "@playwright/test"
import { CheckoutYourInformationPage } from "../page/CheckoutYourInformationPage"
import { LoginPage } from "../page/LoginPage"

test.describe("checkout validation tests", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await loginPage.loginAs("standard_user", "secret_sauce")

        await new CheckoutYourInformationPage(page).goto()
    })

    test("should not be possible to checkout without first name", async ({ page }) => {
        const checkoutYourInformationPage = new CheckoutYourInformationPage(page)

        await checkoutYourInformationPage.fillFormAndSubmit({ firstName: "", lastName: "Doe", postalCode: "11-222" })

        await expect(checkoutYourInformationPage.errorMessage).toHaveText("Error: First Name is required")
    })

    test("should not be possible to checkout without last name", async ({ page }) => {
        const checkoutYourInformationPage = new CheckoutYourInformationPage(page)

        await checkoutYourInformationPage.fillFormAndSubmit({ firstName: "John", lastName: "", postalCode: "11-222" })

        await expect(checkoutYourInformationPage.errorMessage).toHaveText("Error: Last Name is required")
    })

    test("should not be possible to checkout without postal code", async ({ page }) => {
        const checkoutYourInformationPage = new CheckoutYourInformationPage(page)

        await checkoutYourInformationPage.fillFormAndSubmit({ firstName: "John", lastName: "Doe", postalCode: "" })

        await expect(checkoutYourInformationPage.errorMessage).toHaveText("Error: Postal Code is required")
    })
})
