import { Locator, Page } from '@playwright/test';
import envConfig from '../../utils/envConfig';
import loginSelector from '../selectors/LOGIN_PAGE.json';
import CommonPage from './commonPage';

export class LoginPage extends CommonPage {
  readonly loginWithMFid: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly agreeAndSignIn: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);

    this.loginWithMFid = page.locator(
      loginSelector.LOGIN_PAGE_LOGIN_WITH_BUTTON
    );
    this.emailInput = page.locator(loginSelector.LOGIN_PAGE_EMAIL_INPUT);
    this.passwordInput = page.locator(loginSelector.LOGIN_PAGE_PASSWORD_INPUT);
    this.agreeAndSignIn = page.locator(loginSelector.LOGIN_PAGE_AGREE_BUTTON);
    this.signInButton = page.locator(loginSelector.LOGIN_PAGE_SUBMIT_BUTTON);
  }

  async login(email: string, password: string) {
    await this.loginWithMFid.click();
    await this.emailInput.fill(email);
    await this.agreeAndSignIn.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await this.page.waitForURL(envConfig.baseUrl);
  }
}
