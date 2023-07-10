@ui @supplier @supplier_list
Feature: Supplier page

  Scenario: User logged in successfully
    Given User access the system
    When User enters the email as "" and password as ""
    Then It should be redirected to homepage

  @auth
  Scenario: Verify can access Supplier list and check UI of Supplier List when have data
    Given User redirects to supplier page
    Then Can see "SUPPLIER_PAGE_TABLE_DATA" with at least 1 item

# Scenario: Verify filter supplier name
#   Given User redirects to supplier page
#     And Supplier list has at least 10 items
#     And Filter supplier name has at least 2 options
