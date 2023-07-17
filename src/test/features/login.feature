@login @ignore
Feature: Login

  Scenario: Login should be successful
    Given User access the system
    When User enters the email as "" and password as ""
    Then It should be redirected to homepage
