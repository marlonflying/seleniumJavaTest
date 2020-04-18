Feature: Users

  Scenario: Add a new User
    Given User Launch Chrome browser
    When User opens URL "https://wpsite.com/wp-admin"
    And User enters Email as "emailg@gmail.com" and Password as "password"
    And Click on Log In
    Then Page Title should be "Dashboard ‹ wpsite — WordPress"
    When User click on New User
    Then Page Title should be "Add New User ‹ wpsite — WordPress"
    When User enter info
    And clcik on Add User
    Then User can view confirmation message "New user created"
    When User click on Log Out
    Then Page Title should be "Log In ‹ wpsite — WordPress"
    And close browser