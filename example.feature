Feature: feature de ejemplo para entender como funciona la escritura gherkin

#Scenario: este viene a ser el scenario en particular que se viene a testar
#    Given dada cierta condicion
#    When se realiza una accion
#    Then validaciones en base a los resultados obtenidos bajo las condiciones y acciones previas


Scenario: successful login to todo.ly with a valid user
    Given user "roka" is registered on the db gets into todo.ly home page
    And "roka" has a valid status
    When user completes user field with "roka"
    And user completes pass field with "roka123"
    And the user submits the form
    Then the user is redirected to the home page


Scenario: todo.ly login failed due to valid user, invalid pass
    Given user "roka" is registered on the db gets into todo.ly home page
    And "roka" has a valid status
    When user completes user field with "roka"
    And user completes pass field with "roka12"
    And the user submits the form
    Then the application should stay in the home page
    And throw error message stating that credentials are wrong

Scenario: todo.ly login failed due to empty user, valid pass
    Given user which gets into todo.ly home page
    When the user leaves the user input field empty
    And user completes pass field with "roka123"
    And the user submits the form
    Then the application should stay in the home page
    And throw error message stating that credentials are wrong

Scenario: todo.ly login failed due to empty user, empty pass
    Given user which gets into todo.ly home page
    When the user leaves the user and pass input fields empty
    And the user submits the form
    Then the application should stay in the home page
    And throw error message stating that credentials are wrong