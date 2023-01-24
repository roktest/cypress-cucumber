@Feature
Feature: duckduckgo.com

  @HappyPath
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar

  @UnhappyPath
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar