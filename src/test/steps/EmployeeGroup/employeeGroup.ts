import { Before, Given } from '@cucumber/cucumber';
import { ICustomWorld } from '../../../support/custom-world';
import { EmployeeGroupPage } from '../../pages/EmployeeGroupPage';

let employeeGroupPage: EmployeeGroupPage;
Before(function (this: ICustomWorld) {
  employeeGroupPage = new EmployeeGroupPage(this.page!);
});

Given('User redirects to employee group page', async function () {
  await employeeGroupPage.goToPage('/employee_groups');
});
