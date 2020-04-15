$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
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
formatter.scenarioOutline({
  "name": "Login with Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"https://lachiquitravel.com/wp-admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Log In",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Dashboard ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Log Out",
  "keyword": "When "
});
formatter.step({
  "name": "Page Title should be \"Log In ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "marlonflying@gmail.com",
        "Flyintothesky"
      ]
    },
    {
      "cells": [
        "marlonflying@gmail.com",
        "asdfasdf"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User enters Email as \"marlonflying@gmail.com\" and Password as \"password\"",
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
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:55)\n\tat ✽.Page Title should be \"Dashboard ‹ La Chiqui Travel — WordPress\"(file:///home/marlonflying/IdeaProjects/LaChiquiTravel/Features/Login.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Log Out",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_click_on_Log_Out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Log In ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "User enters Email as \"marlonflying@gmail.com\" and Password as \"password\"",
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
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:55)\n\tat ✽.Page Title should be \"Dashboard ‹ La Chiqui Travel — WordPress\"(file:///home/marlonflying/IdeaProjects/LaChiquiTravel/Features/Login.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Log Out",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.user_click_on_Log_Out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Log In ‹ La Chiqui Travel — WordPress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});