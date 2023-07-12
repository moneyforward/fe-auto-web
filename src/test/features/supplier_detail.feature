@ui @supplier @supplier_detail
Feature: Supplier page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "" and password as ""
    Then It should be redirected to homepage

  # 03
  Scenario: Verify user can create new Supplier with only mandatory field
    Given User redirects to "suppliers"
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD_PLACEHOLDER"
    When User types "<supplier_name>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    Then Can see "SUPPLIER_PAGE_CREATE_SUCCESS_TOAST_MESSAGE"
      And "SUPPLIER_PAGE_DRAWER_CREATE_TITLE" is not displays
      And Can see "SUPPLIER_PAGE_DRAWER_UPDATE_TITLE"
      And "<supplier_name>" displays on the first row of supplier listing
    Examples:
      | supplier_name |
      | S_Name        |
# Scenario: Verify can access Edit Supplier and check UI of Supplier detail
#   Given User redirects to "suppliers"

# 2	Verify can access Supplier Details and check UI of Supplier detail
# 4 Verify user can create new Supplier with all field
# 5	Verify validation when creating Supplier
# 6	Verify user can edit Supplier
# 7	Verify validation when editing Supplier
# 8	Verify user can edit Supplier - Remove all optional field
# 9	Verify that user can access payment method Drawer with correct UI (init state)
# 10	Verify init payment method screen when no payment method is added to supplier
# 11	Verify init payment method screen when at least 1 payment method is added to supplier
# 12	Verify that user can add bank payment method to supplier with all fields inputted
# 13	Verify that user can add non-bank payment method to supplier
# 14	Verify validation when adding bank payment method
# 15	Verify that user cannot uncheck main payment method checkbox when supplier has no payment method
# 16	Verify that user can update payment method from bank to non-bank method
# 17	Verify that user can update payment method from non-bank to bank method
