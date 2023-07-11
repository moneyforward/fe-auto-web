@ui @employee_group @blank @ignore
Feature: Employee group page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "nguyen.tuan.dat+autotest01@moneyforward.vn" and password as "e@dqYvPqY5!F8hhS"
    Then It should be redirected to homepage

  Scenario: Verify can access employee group [eg] list and check ui of eg list when don't have data
    Then "EMPLOYEE_GROUP_PAGE_TITLE" should be defined and not displays on the DOM
    Then Can see "EMPLOYEE_GROUP_PAGE_FILTER_CODE"
    Then Can see "EMPLOYEE_GROUP_PAGE_FILTER_NAME"
    Then Can see "EMPLOYEE_GROUP_PAGE_FILTER_CLEAR_BUTTON"
    Then Can see "EMPLOYEE_GROUP_PAGE_DELETE_BUTTON", and it is "disabled"
    Then Can see "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
    Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_CHECKBOX"
    Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_CODE"
    Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_NAME"
    Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_BELONG_EMPLOYEE"
    Then Can see "EMPLOYEE_GROUP_PAGE_TABLE_DATA_EMPTY_MESSAGE"
    Then Can see tooltip "EMPLOYEE_GROUP_PAGE_HOVERING_TEXT_DELETE_BUTTON" when hovering on delete button with text "EMPLOYEE_GROUP_PAGE_DELETE_BUTTON"
