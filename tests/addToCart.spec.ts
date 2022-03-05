import { test, expect, Page } from "@playwright/test"
import { CartPage } from "../page/CartPage"
import { InventoryPage } from "../page/InventoryPage"
import { LoginPage } from "../page/LoginPage"

test.describe("add to cart tests", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto()
        await loginPage.loginAs("standard_user", "secret_sauce")

        const inventoryPage = new InventoryPage(page)
        await inventoryPage.selectItem("Sauce Labs Onesie")
        await inventoryPage.selectItem("Sauce Labs Backpack")
    })

    test("should show number of items in cart", async ({ page }) => {
        const inventoryPage = new InventoryPage(page)

        await expect(inventoryPage.shippingCartBadge).toHaveText("2")
    })

    test("selected items should be in cart", async ({ page }) => {
        const inventoryPage = new InventoryPage(page)

        await inventoryPage.shoppingCart.click()

        await expect(new CartPage(page).inventoryItemNames).toHaveText(["Sauce Labs Onesie", "Sauce Labs Backpack"])
    })
})
