@ui @supplier @supplier_list
Feature: Supplier page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "" and password as ""
    Then It should be redirected to homepage


# Scenario: 03 Verify that list has a default sorting (newest to oldest) by created date of supplier
# Scenario: 04 Verify filter supplier code
# Scenario: 05 Verify filter supplier name
# Scenario: 06 Verify combination filters of supplier code and supplier name
# Scenario: 07 Verify reset filter
# Scenario: 08 Verify pagination in supplier list
# Scenario: 09 Verify pagination in supplier list has paging input field, page number, total number of pages, total number of suppliers, next/previous arrow button
# Scenario: 10 Verify the state of next/previous button in pagination // at least 2 pages
# Scenario: 11 Verify that every page has 50 supplier records
# Scenario: 12 Verify that user can go to a specify page number by input
# Scenario: 13 Verify that user stays on the current page when inputting invalid number in pagination box (inputted page number > total pages)
# Scenario: 14 Verify that after clicking on the next, page number is updated accordingly
# Scenario: 15 Verify that after clicking on the previous, page number is updated accordingly
# Scenario: 16 Verify that pagination is displayed correctly with filtered supplier list
# Scenario: 17 Verify that pagination works normally with filtered supplier list
