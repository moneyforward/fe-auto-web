Feature: Login
  User wants to login RCI system

  Scenario: User is not logged in
    # Given: context
    Given User redirects to "payable-invoice.test.mfw.work"
    And User inputs email
    And User clicks Agree and Sign in button
    And User inputs password
    # When: conditions
    When User clicks Sign in button
    # Then: outcome
    Then I should see the homepage
