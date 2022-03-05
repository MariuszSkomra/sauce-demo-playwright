import { expect, Locator, Page } from "@playwright/test"

export class CartPage {

    readonly page: Page
    readonly inventoryItemNames: Locator

    constructor(page: Page) {
        this.page = page
        this.inventoryItemNames = page.locator(".inventory_item_name")
    }
}