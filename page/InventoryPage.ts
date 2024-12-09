import { Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly shoppingCart: Locator;
  readonly shippingCartBadge: Locator;
  readonly sortBy: Locator;
  readonly inventoryItemNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.locator("#shopping_cart_container");
    this.shippingCartBadge = page.locator(".shopping_cart_badge");
    this.sortBy = page.locator("data-test=product_sort_container");
    this.inventoryItemNames = page.locator(".inventory_item_name");
  }

  selectItem = async (itemName: string): Promise<void> => {
    await this.page.locator(`xpath=//*[@class='inventory_item' and .//*[@class='inventory_item_name' and text()='${itemName}']]//button`).click();
  };
}
