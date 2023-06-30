@invoice @ignore
Feature: Invoice page

  Background:
    Given User access the system
    When User enters the email and password
    Then It should be redirected to homepage

  Scenario Outline: View Invoice Information
    Given User redirects to invoice page
    Then User can see the invoice page title
