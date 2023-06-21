import { Locator, Page } from '@playwright/test';
import envConfig from '../../../utils/envConfig';
import CommonPage from './commonPage';

export class LoginPage extends CommonPage {
  readonly loginWithMFid: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly agreeAndSignIn: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginWithMFid = page.getByRole('button', {
      name: 'マネーフォワードIDでログインする',
    });
    this.emailInput = page.locator('input[name="mfid_user[email]"]');
    this.passwordInput = page.locator('input[name="mfid_user[password]"]');
    this.agreeAndSignIn = page.getByRole('button', {
      name: 'Agree and sign in',
    });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async goTo() {
    await this.page.goto(envConfig.baseUrl + '/auth/login');
    await this.loginWithMFid.click();
  }

  async fillInEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async onClickAgreeAndSignIn() {
    await this.agreeAndSignIn.click();
  }

  async fillInPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async onClickSignIn() {
    await this.signInButton.click();
  }

  async login(email: string, password: string) {
    await this.loginWithMFid.click();
    await this.emailInput.fill(email);
    await this.agreeAndSignIn.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
