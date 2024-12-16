import { Locator, Page } from "@playwright/test";

export class CheckoutYourInformationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId("firstName");
    this.lastNameInput = page.getByTestId("lastName");
    this.postalCodeInput = page.getByTestId("postalCode");
    this.continueButton = page.getByTestId("continue");
    this.errorMessage = page.getByTestId("error");
  }

  goto = async (): Promise<void> => {
    await this.page.goto("/checkout-step-one.html");
  };

  fillFormAndSubmit = async (args: { firstName: string; lastName: string; postalCode: string }): Promise<void> => {
    await this.firstNameInput.fill(args.firstName);
    await this.lastNameInput.fill(args.lastName);
    await this.postalCodeInput.fill(args.postalCode);
    await this.continueButton.click();
  };
}
