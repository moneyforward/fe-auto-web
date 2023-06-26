@login
Feature: Login

  Scenario: Login should be successful
    Given User access the system
    When User enters the email and password
    Then It should be redirected to homepage
