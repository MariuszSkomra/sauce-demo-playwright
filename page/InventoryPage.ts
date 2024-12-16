import { Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly shoppingCart: Locator;
  readonly shippingCartBadge: Locator;
  readonly sortBy: Locator;
  readonly inventoryItem: Locator;
  readonly inventoryItemNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.locator("#shopping_cart_container");
    this.shippingCartBadge = page.getByTestId("shopping-cart-badge");
    this.sortBy = page.getByTestId("product-sort-container");
    this.inventoryItem = page.getByTestId("inventory-item");
    this.inventoryItemNames = page.getByTestId("inventory-item-name");
  }

  selectItem = async (itemName: string): Promise<void> => {
    await this.inventoryItem
      .filter({ has: this.inventoryItemNames.getByText(itemName) })
      .locator("button")
      .click();
  };
}
