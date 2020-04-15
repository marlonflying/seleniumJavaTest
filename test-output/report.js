$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Users.feature");
formatter.feature({
  "name": "Users",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a new User",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://lachiquitravel.com/wp-admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"marlonflying@gmail.com\" and Password as \"Flyintothesky\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enters_Email_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Log In",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.click_on_Log_In()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on New User",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_click_on_New_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Add New User ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter info",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_enter_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clcik on Add User",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.clcik_on_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view confirmation message \"New user created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_can_view_confirmation_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log Out",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_click_on_Log_Out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Log In ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});