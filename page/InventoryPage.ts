import { Locator, Page } from "@playwright/test";

export class InventoryPage {

    readonly page: Page
    readonly shoppingCart: Locator

    constructor(page: Page) {
        this.page = page
        this.shoppingCart = page.locator("#shopping_cart_container")
    }
}