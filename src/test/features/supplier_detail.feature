@ui @supplier @supplier_detail
Feature: Supplier page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "" and password as ""
    Then It should be redirected to homepage

  @s01
  Scenario: Verify can access Edit Supplier and check UI of Supplier detail
    Given User redirects to "suppliers"
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_CODE_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_CODE_FIELD"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_DEPT_NAME_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_DEPT_NAME_FIELD"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_MEMBER_NAME_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_MEMBER_NAME_FIELD"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_EMAIL_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_EMAIL_FIELD"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_REGISTRATION_NUMBER_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_REGISTRATION_NUMBER_FIELD"

  # @s02
  # Scenario: Verify can access Supplier Details and check UI of Supplier detail

  @s03
  Scenario: Verify user can create new Supplier with only mandatory field
    Given User redirects to "suppliers"
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_TITLE"
      And Can see "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD"
    When User types "randomly" "<SUPPLIER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    Then Can see "SUPPLIER_PAGE_CREATE_SUCCESS_TOAST_MESSAGE"
      And "SUPPLIER_PAGE_DRAWER_CREATE_TITLE" is not displays
      And Can see "SUPPLIER_PAGE_DRAWER_UPDATE_TITLE"
      And "<SUPPLIER_NAME>" displays "randomly" on the first row of supplier listing
    Examples:
      | SUPPLIER_NAME |
      | s_name        |

  # missing: receiver, receiver group, notes
  @s04
  Scenario: Verify user can create new Supplier with all field
    Given User redirects to "suppliers"
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_TITLE"
    When User types "randomly" "<SUPPLIER_CODE>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_CODE_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_DEPT_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_DEPT_NAME_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_MEMBER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_MEMBER_NAME_FIELD" field in supplier page
      And User types "" "<SUPPLIER_REGISTRATION_NUMBER>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_REGISTRATION_NUMBER_FIELD" field in supplier page
      And User types "" "<SUPPLIER_EMAI>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_EMAIL_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    Then Can see "SUPPLIER_PAGE_CREATE_SUCCESS_TOAST_MESSAGE"
      And "SUPPLIER_PAGE_DRAWER_CREATE_TITLE" is not displays
      And Can see "SUPPLIER_PAGE_DRAWER_UPDATE_TITLE"
      And "<SUPPLIER_CODE>" displays "randomly" on the first row of supplier listing
      And "<SUPPLIER_NAME>" displays "randomly" on the first row of supplier listing
      And "<SUPPLIER_DEPT_NAME>" displays "randomly" on the first row of supplier listing
      And "<SUPPLIER_REGISTRATION_NUMBER>" displays "" on the first row of supplier listing
      And "<SUPPLIER_MEMBER_NAME>" displays "randomly" on the first row of supplier listing

    Examples:
      | SUPPLIER_CODE | SUPPLIER_NAME | SUPPLIER_DEPT_NAME | SUPPLIER_MEMBER_NAME | SUPPLIER_EMAI       | SUPPLIER_REGISTRATION_NUMBER |
      | s_code        | s_name        | s_dept_name        | s_member_name        | s-email@autotest.vn | 1234567890123                |

  # missing: receiver, receiver group, notes
  @s05
  Scenario: Verify validation when creating Supplier
    Given User redirects to "suppliers"
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_TITLE"
    # case 1: duplicate code
    When User types "" "<SUPPLIER_CODE_DUP>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_CODE_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    # show error
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_WARNING_MESSAGE_DUPLICATE_SUPPLIER_CODE"
    When User clicks on "SUPPLIER_PAGE_DRAWER_CLOSE_BUTTON" element

    # case 2: input duplicate name and put empty code
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
      And User types "" "<SUPPLIER_NAME_DUP>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    # show error
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_WARNING_MESSAGE_DUPLICATE_SUPPLIER_CODE_AND_NAME"
    When User clicks on "SUPPLIER_PAGE_DRAWER_CLOSE_BUTTON" element

    # case 3: update Code and Name to valid and input invalid email
    When User clicks on "SUPPLIER_PAGE_ADD_BUTTON" element
      And User types "randomly" "<SUPPLIER_CODE>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_CODE_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User types "" "<SUPPLIER_EMAIL>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_EMAIL_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    Then Can see "SUPPLIER_PAGE_DRAWER_CREATE_WARNING_MESSAGE_DUPLICATE_SUPPLIER_EMAIL_INVALID"

    Examples:
      | SUPPLIER_CODE | SUPPLIER_NAME | SUPPLIER_CODE_DUP                           | SUPPLIER_NAME_DUP                           | SUPPLIER_EMAIL       |
      | s_code        | s_name        | s_code_d023d913-021a-41fd-b2eb-21369c9e24b3 | s_name_61eccaf5-5e96-4490-97a3-94127a544c26 | email_invalid_format |

  # missing: receiver, receiver group, notes
  @s06
  Scenario: Verify user can edit Supplier
    Given User redirects to "suppliers"
    When User clicks on the first item on the supplier listing
    Then Can see "SUPPLIER_PAGE_DRAWER_UPDATE_TITLE"
    When User types "randomly" "<SUPPLIER_CODE>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_CODE_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NAME_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_DEPT_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_DEPT_NAME_FIELD" field in supplier page
      And User types "randomly" "<SUPPLIER_MEMBER_NAME>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_MEMBER_NAME_FIELD" field in supplier page
      And User types "" "<SUPPLIER_REGISTRATION_NUMBER>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_REGISTRATION_NUMBER_FIELD" field in supplier page
      And User types "" "<SUPPLIER_EMAI>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_EMAIL_FIELD" field in supplier page
      # select first option of employee group
      # select first option of receiver
      And User types "" "<SUPPLIER_NOTE>" into "SUPPLIER_PAGE_DRAWER_SUPPLIER_NOTE_FIELD" field in supplier page
      And User clicks on "SUPPLIER_PAGE_DRAWER_SUBMIT_BUTTON" element
    Then Can see "SUPPLIER_PAGE_UPDATE_SUCCESS_TOAST_MESSAGE"
      And "SUPPLIER_PAGE_DRAWER_CREATE_TITLE" is not displays
      And "<SUPPLIER_CODE>" displays "randomly" on the first row of supplier listing
      And "<SUPPLIER_NAME>" displays "randomly" on the first row of supplier listing
      And "<SUPPLIER_DEPT_NAME>" displays "randomly" on the first row of supplier listing
      And "<SUPPLIER_REGISTRATION_NUMBER>" displays "" on the first row of supplier listing
      And "<SUPPLIER_MEMBER_NAME>" displays "randomly" on the first row of supplier listing

    Examples:
      | SUPPLIER_CODE | SUPPLIER_NAME | SUPPLIER_DEPT_NAME | SUPPLIER_MEMBER_NAME | SUPPLIER_EMAI       | SUPPLIER_REGISTRATION_NUMBER | SUPPLIER_NOTE                       |
      | s_code        | s_name        | s_dept_name        | s_member_name        | s-email@autotest.vn | 1234567890123                | Note: Verify user can edit supplier |


# 6
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
