import { Locator, Page } from "@playwright/test";

export class CheckoutOveriewPage {
  readonly page: Page;
  readonly inventoryItemNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItemNames = page.getByTestId("inventory-item-name");
  }

  goto = async (): Promise<void> => {
    await this.page.goto("/checkout-step-two.html");
  };
}
