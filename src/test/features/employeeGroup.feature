@ui @employee_group
Feature: Employee group page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "nguyen.tuan.dat+autotest04@moneyforward.vn" and password as "nQ26F8^bGJmUGBI6"
    Then It should be redirected to homepage

  Scenario: Verify the UI of create EG drawer
    Given User redirects to employee group page
    When User clicks on "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
    Then Can see "EMPLOYEE_GROUP_PAGE_DRAWER_CREATE_TITLE"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE_TITLE"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_TITLE"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE_PLACEHOLDER"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_PLACEHOLDER"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_SUBMIT_BUTTON", and it is "disabled"
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_CLOSE_BUTTON"

  Scenario: Verify can create new EG with only required field
    Given User redirects to employee group page
    When User clicks on "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
    Then Can see "EMPLOYEE_GROUP_PAGE_DRAWER_CREATE_TITLE"
    When  User types "<EG_Name>" into "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_FIELD" field
      And User clicks on "EMPLOYEE_GROUP_PAGE_DRAWER_SUBMIT_BUTTON"
    # - show success toast message <受取部門を追加しました> (EG is added)
    Then Can see "EMPLOYEE_GROUP_PAGE_SUCCESS_TOAST_MESSAGE"
      # - drawer <受取部門追加> (add EG) is closed
      And "EMPLOYEE_GROUP_PAGE_DRAWER_CREATE_TITLE" is not displays
      # - drawer <受取部門編集> is displayed
      And   Can see "EMPLOYEE_GROUP_PAGE_DRAWER_UPDATE_TITLE"
      # + show section title  <従業員> (Employee)
      And  Can see "EMPLOYEE_GROUP_PAGE_DRAWER_EMPLOYEE_SECTION_TITLE"
      # - input field <受取部門名> (EG name) shows the value user inputted in step 3
      And Can see "<EG_Name>" on "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_FIELD" field
      # + have dropdown with placeholder <従業員を選択してください> (please select employee)
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_PLACEHOLDER"
      # + button <追加> (Add) is disabled
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_EMPLOYEE_SECTION_BUTTON", and it is "disabled"
      # + name table shows text when there is no data <受取部門に所属する従業員を追加してください> (please add employee belonging to this EG)
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_EMPLOYEE_SECTION_TABLE_EMPTY_MESSAGE"
      # + have <氏名> (name) table below the dropdown
      And "<EG_Name>" displays on the first row of data listing
    Examples:
      | EG_Name |
      | EG01    |

  Scenario: Verify can create new EG with input all field
    Given User redirects to employee group page
    When User clicks on "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
    Then Can see "EMPLOYEE_GROUP_PAGE_DRAWER_CREATE_TITLE"
    When User types "<EG_Code>" into "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE_FIELD" field
      And User types "<EG_Name>" into "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_FIELD" field
      And User clicks on "EMPLOYEE_GROUP_PAGE_DRAWER_SUBMIT_BUTTON"
    # - show success toast message <受取部門を追加しました> (EG is added)
    Then Can see "EMPLOYEE_GROUP_PAGE_SUCCESS_TOAST_MESSAGE"
      # - drawer <受取部門追加> (add EG) is closed
      And "EMPLOYEE_GROUP_PAGE_DRAWER_CREATE_TITLE" is not displays
      # - drawer <受取部門編集> is displayed
      And   Can see "EMPLOYEE_GROUP_PAGE_DRAWER_UPDATE_TITLE"
      # - input field <受取部門コード> EG code & <受取部門名> (EG name) show the value user inputted in step 3
      And Can see "<EG_Code>" on "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE_FIELD" field
      And Can see "<EG_Name>" on "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_FIELD" field
      # + show section title  <従業員> (Employee)
      And  Can see "EMPLOYEE_GROUP_PAGE_DRAWER_EMPLOYEE_SECTION_TITLE"
      # + have dropdown with placeholder <従業員を選択してください> (please select employee)
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME_PLACEHOLDER"
      # + button <追加> (Add) is disabled
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_EMPLOYEE_SECTION_BUTTON", and it is "disabled"
      # + name table shows text when there is no data <受取部門に所属する従業員を追加してください> (please add employee belonging to this EG)
      And Can see "EMPLOYEE_GROUP_PAGE_DRAWER_EMPLOYEE_SECTION_TABLE_EMPTY_MESSAGE"
      And "<EG_Code>" displays on the first row of data listing
      # + have <氏名> (name) table below the dropdown
      And "<EG_Name>" displays on the first row of data listing

    Examples:
      | EG_Code | EG_Name |
      | EG02    | EG02    |

#  Scenario: Verify can access EG list and check ui of EG list when have data

# Scenario: Verify can delete eg

# Scenario: Verify behaviour of supplier is linking to EG after deleted

# Scenario: Verify can filter EG by . . .

# Scenario: Verify can filter EG combine by

# Scenario: Verify pagination of EG screen
