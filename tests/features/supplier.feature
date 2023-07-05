@ui @supplier @supplier_list
Feature: Supplier page

  Background: User logged in successfully
    Given User access the system
    When User enters the email as "nguyen.tuan.dat@moneyforward.vn" and password as "..."
    Then It should be redirected to homepage

  Scenario: Verify can access Supplier list and check UI of Supplier List when have data
    Given User redirects to supplier page
    Then Can see "SUPPLIER_PAGE_TABLE_DATA" with at least 1 item
