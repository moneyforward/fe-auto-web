import employeeGroup from './EMPLOYEE_GROUP_PAGE.json';
import invoice from './INVOICE_PAGE.json';
import supplier from './SUPPLIER_PAGE.json';

const pageLocator = {
  ...invoice,
  ...supplier,
  ...employeeGroup,
};

export default pageLocator;
