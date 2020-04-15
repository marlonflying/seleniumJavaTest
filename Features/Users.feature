Feature: Users

  Scenario: Add a new User
    Given User Launch Chrome browser
    When User opens URL "https://lachiquitravel.com/wp-admin"
    And User enters Email as "marlonflying@gmail.com" and Password as "Flyintothesky"
    And Click on Log In
    Then Page Title should be "Dashboard ‹ La Chiqui Travel — WordPress"
    When User click on New User
    Then Page Title should be "Add New User ‹ La Chiqui Travel — WordPress"
    When User enter info
    And clcik on Add User
    Then User can view confirmation message "New user created"
    When User click on Log Out
    Then Page Title should be "Log In ‹ La Chiqui Travel — WordPress"
    And close browser