Feature: Walmart

  @QuickTest
  Scenario: website search bar functionality
    Given I am open a browser
    When I am navigate to Walmart website
    And I am enter XBox in the search field
    And I am click search button
    Then I am should see XBox result
