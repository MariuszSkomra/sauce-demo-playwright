import { test, expect } from "@playwright/test";
import { InventoryPage } from "../page/InventoryPage";
import { LoginPage } from "../page/LoginPage";

test.describe("sort items tests", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginAs("standard_user", "secret_sauce");
    });

    test("should sort items by name from A to Z", async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy.selectOption({ label: "Name (A to Z)" });

        await expect(inventoryPage.inventoryItemNames).toHaveText([
            "Sauce Labs Backpack",
            "Sauce Labs Bike Light",
            "Sauce Labs Bolt T-Shirt",
            "Sauce Labs Fleece Jacket",
            "Sauce Labs Onesie",
            "Test.allTheThings() T-Shirt (Red)",
        ]);
    });

    test("should sort items by name from Z to A", async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy.selectOption({ label: "Name (Z to A)" });

        await expect(inventoryPage.inventoryItemNames).toHaveText([
            "Test.allTheThings() T-Shirt (Red)",
            "Sauce Labs Onesie",
            "Sauce Labs Fleece Jacket",
            "Sauce Labs Bolt T-Shirt",
            "Sauce Labs Bike Light",
            "Sauce Labs Backpack",
        ]);
    });

    test("should sort items by price from low to high", async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy.selectOption({
            label: "Price (low to high)",
        });

        await expect(inventoryPage.inventoryItemNames).toHaveText([
            "Sauce Labs Onesie",
            "Sauce Labs Bike Light",
            "Sauce Labs Bolt T-Shirt",
            "Test.allTheThings() T-Shirt (Red)",
            "Sauce Labs Backpack",
            "Sauce Labs Fleece Jacket",
        ]);
    });

    test("should sort items by price from high to low", async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy.selectOption({
            label: "Price (high to low)",
        });

        await expect(inventoryPage.inventoryItemNames).toHaveText([
            "Sauce Labs Fleece Jacket",
            "Sauce Labs Backpack",
            "Sauce Labs Bolt T-Shirt",
            "Test.allTheThings() T-Shirt (Red)",
            "Sauce Labs Bike Light",
            "Sauce Labs Onesie",
        ]);
    });
});
