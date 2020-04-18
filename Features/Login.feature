Feature:  Login

  Scenario: Successful Login with Valid Credentials
    Given User Launch Chrome browser
    When User opens URL "https://wpsite.com/wp-admin"
    And User enters Email as "emailg@gmail.com" and Password as "password"
    And Click on Log In
    Then Page Title should be "Dashboard ‹ wpsite — WordPress"
    When User click on Log Out
    Then Page Title should be "Log In ‹ wpsite — WordPress"
    And close browser

  Scenario Outline: Login with Data Driven
    Given User Launch Chrome browser
    When User opens URL "https://wpsite.com/wp-admin"
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Log In
    Then Page Title should be "Dashboard ‹ wpsite — WordPress"
    When User click on Log Out
    Then Page Title should be "Log In ‹ La wpsite — WordPress"
    And close browser

    Examples:
      | email | password  |
      | email@gmail.com  | password |
      | email2@gmail.com  | asdfasdf  |
