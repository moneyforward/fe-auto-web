@ui @supplier @supplier_list
Feature: Supplier page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "" and password as ""
    Then It should be redirected to homepage

  @blank
  Scenario: Verify can access Supplier list and check UI of Supplier List when don't have data
    Given User redirects to supplier page
    Then "SUPPLIER_PAGE_SUPPLIER_TITLE" should be defined and not displays on the DOM
    Then Can see "SUPPLIER_PAGE_SUB_HEADER_TITLE"
    Then Can see "SUPPLIER_PAGE_TPM_BUTTON", and it is "enabled"
    Then Can see "SUPPLIER_PAGE_FILTER_SUPPLIER_CODE"
    Then Can see "SUPPLIER_PAGE_FILTER_SUPPLIER_NAME"
    Then Can see "SUPPLIER_PAGE_FILTER_RECEIVER_DEPT_NAME"
    Then Can see "SUPPLIER_PAGE_FILTER_RECEIVER_NAME"
    Then Can see "SUPPLIER_PAGE_FILTER_INVITATION_STATUS_NAME"
    Then Can see "SUPPLIER_PAGE_FILTER_CLEAR_BUTTON"
    Then Can see "SUPPLIER_PAGE_DELETE_BUTTON", and it is "disabled"
    Then Can see tooltip when hovering on delete button
    Then Can see "SUPPLIER_PAGE_ADD_BUTTON", and it is "enabled"
    Then Can see "SUPPLIER_PAGE_IMPORT_BUTTON", and it is "enabled"
    Then Can see "SUPPLIER_PAGE_TABLE_PREV_ARROW_PAGINATION", and it is "disabled"
    Then Can see "SUPPLIER_PAGE_TABLE_NEXT_ARROW_PAGINATION", and it is "disabled"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_CODE"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_NAME"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_DEPT_NAME"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_SUPPLIER_PIC_NAME"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_RECEIVER_DEPT_NAME"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_RECEIVER_PIC_NAME"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_MAIN_PAYMENT_METHOD"
    Then Can see "SUPPLIER_PAGE_TABLE_HEADER_INVITATION_STATUS"
  # Then Can see "SUPPLIER_PAGE_TABLE_DATA_EMPTY_MESSAGE"

  @supplier_02
  Scenario: Verify can access Supplier list and check UI of Supplier List when have data
    Given User redirects to supplier page
    Then Can see "SUPPLIER_PAGE_TABLE_DATA" with at least 1 item
