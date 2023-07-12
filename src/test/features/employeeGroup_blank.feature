@ui @employee_group @blank
Feature: Employee group page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "nguyen.tuan.dat+autotest04@moneyforward.vn" and password as "nQ26F8^bGJmUGBI6"
    Then It should be redirected to homepage

  Scenario: Verify can access employee group [eg] list and check ui of eg list when don't have data
    Given User redirects to "employee_groups"
    Then "EMPLOYEE_GROUP_PAGE_TITLE" is present
      And Can see "EMPLOYEE_GROUP_PAGE_FILTER_CODE"
      And Can see "EMPLOYEE_GROUP_PAGE_FILTER_NAME"
      And Can see "EMPLOYEE_GROUP_PAGE_FILTER_CLEAR_BUTTON"
      And Can see "EMPLOYEE_GROUP_PAGE_DELETE_BUTTON" and it is "disabled"
      And Can see "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
      And Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_CHECKBOX"
      And Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_CODE"
      And Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_NAME"
      And Can see "EMPLOYEE_GROUP_TABLE_HEADER_BELONG_EMPLOYEE"
      And Can see "EMPLOYEE_GROUP_PAGE_TABLE_DATA_EMPTY_MESSAGE"
      And Can see tooltip "EMPLOYEE_GROUP_PAGE_HOVERING_TEXT_DELETE_BUTTON" when hovering on "EMPLOYEE_GROUP_PAGE_DELETE_BUTTON" element

  Scenario: Verify the UI of create EG drawer
    Given User redirects to "employee_groups"
    When User clicks on "EMPLOYEE_GROUP_PAGE_ADD_BUTTON" element
    Then Can see "EMPLOYEE_GROUP_PAGE_DRAWER_CREATE_TITLE"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE_TITLE"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_TITLE"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE_PLACEHOLDER"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_PLACEHOLDER"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_SUBMIT_BUTTON" and it is "enabled"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_CLOSE_BUTTON"
