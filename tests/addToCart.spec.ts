import { test, expect } from "@playwright/test";
import { CartPage } from "../page/CartPage";
import { CheckoutOveriewPage } from "../page/CheckoutOverviewPage";
import { InventoryPage } from "../page/InventoryPage";
import { LoginPage } from "../page/LoginPage";

test.describe("add to cart tests", () => {
  const itemsToAdd = ["Sauce Labs Onesie", "Sauce Labs Backpack"];

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginAs("standard_user", "secret_sauce");

    const inventoryPage = new InventoryPage(page);
    for (const item of itemsToAdd) {
      await inventoryPage.selectItem(item);
    }
  });

  test("should show number of items in cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.shippingCartBadge).toHaveText("2");
  });

  test("selected items should be in cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.shoppingCart.click();

    await expect(new CartPage(page).inventoryItemNames).toHaveText(itemsToAdd);
  });

  test("selected items should be in checkout overview", async ({ page }) => {
    const checkoutOveriewPage = new CheckoutOveriewPage(page);

    await checkoutOveriewPage.goto();

    await expect(checkoutOveriewPage.inventoryItemNames).toHaveText(itemsToAdd);
  });
});
