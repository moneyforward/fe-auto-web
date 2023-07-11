import { Page } from '@playwright/test';
import WrapperPage from './WrapperPage';

export class EmployeeGroupPage extends WrapperPage {
  constructor(page: Page) {
    super(page);
  }
}
