Feature: todo.ly - user testing

    Scenario: non existing user sign up
    Given the user navigates to "https://todo.ly/" home page
    And user see todo.ly logo
    When user click on sign up free button
    And popup appears
    And user completes full name field with "mono"
    And user completes email with "mono"
    And user completes pass with "mono"
    And user completes timezone with "Argentina Standard Time" time zone
    And user accepts terms of service
    And user clicks on signup button to make the form submission
    Then user enter the application where he can see the left menu
    And it is able to logout

    #Scenario: existing user login

    #Scenario: existing user sign up

    #Scenario: non existing user login

    #Scenario: existing user with wrong credentials login

    #Scenario: existing user with empty credentials login