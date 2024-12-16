import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly inventoryItemNames: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItemNames = page.getByTestId("inventory-item-name");
    this.checkoutButton = page.getByTestId("checkout");
  }
}
