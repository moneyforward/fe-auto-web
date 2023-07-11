@ui @employee_group @blank
Feature: Employee group page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "nguyen.tuan.dat+autotest04@moneyforward.vn" and password as "nQ26F8^bGJmUGBI6"
    Then It should be redirected to homepage

  # Scenario: Verify can access employee group [eg] list and check ui of eg list when don't have data
  #   Then "EMPLOYEE_GROUP_PAGE_TITLE" should be defined and not displays on the DOM
  #   Then Can see "EMPLOYEE_GROUP_PAGE_FILTER_CODE"
  #   Then Can see "EMPLOYEE_GROUP_PAGE_FILTER_NAME"
  #   Then Can see "EMPLOYEE_GROUP_PAGE_FILTER_CLEAR_BUTTON"
  #   Then Can see "EMPLOYEE_GROUP_PAGE_DELETE_BUTTON", and it is "disabled"
  #   Then Can see "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
  #   Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_CHECKBOX"
  #   Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_CODE"
  #   Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_EG_NAME"
  #   Then Can see "EMPLOYEE_GROUP_TABLE_HEADER_BELONG_EMPLOYEE"
  #   Then Can see "EMPLOYEE_GROUP_PAGE_TABLE_DATA_EMPTY_MESSAGE"
  #   Then Can see tooltip "EMPLOYEE_GROUP_PAGE_HOVERING_TEXT_DELETE_BUTTON" when hovering on delete button with text "EMPLOYEE_GROUP_PAGE_DELETE_BUTTON"
  # Scenario: Verify can access eg list and check ui of eg list when have data

  Scenario: Verify the ui of create eg drawer
    Given User redirects to employee group page
    When User clicks on "EMPLOYEE_GROUP_PAGE_ADD_BUTTON"
    Then Can see "EMPLOYEE_GROUP_PAGE_DRAWER_TITLE"
    When User types "<EG_Code>" into "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_CODE"
      And User types "<EG_Name>" into "EMPLOYEE_GROUP_PAGE_DRAWER_GROUP_NAME"
      And User clicks on "EMPLOYEE_GROUP_PAGE_DRAWER_SUBMIT_BUTTON"
    # Thene

    Examples:
      | EG_Code | EG_Name          | Index |
      | G1      | EG data.randomId | 1     |
# Scenario: Verify can create new eg with only required field

# Scenario: Verify can create new eg with input all field

# Scenario: Verify can delete eg

# Scenario: Verify behaviour of supplier is linking to eg after deleted

# Scenario: Verify can filter eg by . . .

# Scenario: Verify can filter eg combine by

# Scenario: Verify pagination of eg screen
