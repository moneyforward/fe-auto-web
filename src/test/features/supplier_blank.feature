@ui @supplier @supplier_list @blank
Feature: Supplier page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "nguyen.tuan.dat+autotest04@moneyforward.vn" and password as "nQ26F8^bGJmUGBI6"
    Then It should be redirected to homepage

  Scenario: Verify can access supplier list and check ui of supplier list when don't have data
    Given User redirects to "suppliers"
    Then "SUPPLIER_PAGE_SUPPLIER_TITLE" is present
      And Can see "SUPPLIER_PAGE_SUB_HEADER_TITLE"
      And Can see "SUPPLIER_PAGE_TPM_BUTTON" and it is "enabled"
      And Can see "SUPPLIER_PAGE_FILTER_SUPPLIER_CODE"
      And Can see "SUPPLIER_PAGE_FILTER_SUPPLIER_NAME"
      # And Can see "SUPPLIER_PAGE_FILTER_RECEIVER_DEPT_NAME"
      # And Can see "SUPPLIER_PAGE_FILTER_RECEIVER_NAME"
      # And Can see "SUPPLIER_PAGE_FILTER_INVITATION_STATUS_NAME"
      And Can see "SUPPLIER_PAGE_FILTER_CLEAR_BUTTON"
      And Can see "SUPPLIER_PAGE_DELETE_BUTTON" and it is "disabled"
      And Can see tooltip "EMPLOYEE_GROUP_PAGE_HOVERING_TEXT_DELETE_BUTTON" when hovering on "SUPPLIER_PAGE_DELETE_BUTTON" element
      And Can see "SUPPLIER_PAGE_ADD_BUTTON" and it is "enabled"
      And Can see "SUPPLIER_PAGE_IMPORT_BUTTON" and it is "enabled"
      And Can see "SUPPLIER_PAGE_TABLE_PREV_ARROW_PAGINATION" and it contains "disabled" in class name
      And Can see "SUPPLIER_PAGE_TABLE_NEXT_ARROW_PAGINATION" and it contains "disabled" in class name
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_CODE"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_NAME"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_DEPT_NAME"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_PIC_NAME"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_RECEIVER_DEPT_NAME"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_RECEIVER_PIC_NAME"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_MAIN_PAYMENT_METHOD"
      And Can see "SUPPLIER_PAGE_TABLE_HEADER_INVITATION_STATUS"
      And Can see "SUPPLIER_PAGE_TABLE_DATA_EMPTY_MESSAGE"

  Scenario: Verify can access Supplier list and check UI of Supplier List when have data
    Given User redirects to "suppliers"
    Then Can see "SUPPLIER_PAGE_TABLE_DATA" with at least 1 item
