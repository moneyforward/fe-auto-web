@supplier
Feature: Supplier page

  Background:
    Given User access the system
    When User enters the email and password
    Then It should be redirected to homepage

  Scenario Outline: View Supplier Information
    Given User redirects to supplier page
    Then User can see the supplier page title
