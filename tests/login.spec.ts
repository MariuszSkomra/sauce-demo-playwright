import { test, expect } from "@playwright/test"
import { LoginPage } from "../page/LoginPage"
import { InventoryPage } from "../page/InventoryPage"

test.describe("Login Test", () => {

    test.beforeEach(async ({ page }) => {
        new LoginPage(page).goto()
    })

    test("should login with correct credentials", async ({ page }) => {
        const loginPage = new LoginPage(page)

        loginPage.loginAs("standard_user", "secret_sauce")

        await expect(new InventoryPage(page).shoppingCart).toBeVisible()
    })

    test("should display error when credentials are incorrect", async ({ page }) => {
        const loginPage = new LoginPage(page)

        loginPage.loginAs("admin", "admin")

        await expect(loginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })

    test("should display error when user is locked out", async ({ page }) => {
        const loginPage = new LoginPage(page)

        loginPage.loginAs("locked_out_user", "secret_sauce")

        await expect(loginPage.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.")
    })


    test("should login as user with performance glitch", async ({ page }) => {
        const loginPage = new LoginPage(page)

        loginPage.loginAs("performance_glitch_user", "secret_sauce")

        await expect(new InventoryPage(page).shoppingCart).toBeVisible({ timeout: 10 * 1000 })
    })
})
