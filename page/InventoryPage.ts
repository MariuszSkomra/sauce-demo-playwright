import { Locator, Page } from "@playwright/test";

export class InventoryPage {

    readonly page: Page
    readonly shoppingCart: Locator
    readonly shippingCartBadge: Locator

    constructor(page: Page) {
        this.page = page
        this.shoppingCart = page.locator("#shopping_cart_container")
        this.shippingCartBadge = page.locator(".shopping_cart_badge")
    }

    selectItem = async (itemName: string): Promise<void> => {
        await this.page.locator(`xpath=//*[@class='inventory_item_name' and text()='${itemName}']`)
            .locator("xpath=.//ancestor::*[@class='inventory_item']")
            .locator("xpath=.//button")
            .click()
    }
}