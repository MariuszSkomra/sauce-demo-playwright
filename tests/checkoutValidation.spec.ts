import { test, expect, Page } from "@playwright/test"
import { CheckoutPage } from "../page/CheckoutPage"
import { LoginPage } from "../page/LoginPage"

test.describe("checkout validation tests", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await loginPage.loginAs("standard_user", "secret_sauce")

        await new CheckoutPage(page).goto()
    })

    test("should not be possible to checkout without first name", async ({ page }) => {
        const checkoutPage = new CheckoutPage(page)

        await checkoutPage.fillFormAndSubmit({ firstName: "", lastName: "Doe", postalCode: "11-222" })

        await expect(checkoutPage.errorMessage).toHaveText("Error: First Name is required")
    })

    test("should not be possible to checkout without last name", async ({ page }) => {
        const checkoutPage = new CheckoutPage(page)

        await checkoutPage.fillFormAndSubmit({ firstName: "John", lastName: "", postalCode: "11-222" })

        await expect(checkoutPage.errorMessage).toHaveText("Error: Last Name is required")
    })

    test("should not be possible to checkout without postal code", async ({ page }) => {
        const checkoutPage = new CheckoutPage(page)

        await checkoutPage.fillFormAndSubmit({ firstName: "John", lastName: "Doe", postalCode: "" })

        await expect(checkoutPage.errorMessage).toHaveText("Error: Postal Code is required")
    })
})
