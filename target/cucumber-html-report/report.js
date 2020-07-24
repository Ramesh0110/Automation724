$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful search item",
  "description": "",
  "id": "login;successful-search-item",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@single"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter laptop in the search field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see search results",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Successful search items",
  "description": "",
  "id": "login;successful-search-items",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003citems\u003e\" in the search field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search results with \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login;successful-search-items;",
  "rows": [
    {
      "cells": [
        "items",
        "expected"
      ],
      "line": 21,
      "id": "login;successful-search-items;;1"
    },
    {
      "cells": [
        "rose",
        "rose"
      ],
      "line": 22,
      "id": "login;successful-search-items;;2"
    },
    {
      "cells": [
        "iphone",
        "iphone"
      ],
      "line": 23,
      "id": "login;successful-search-items;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Successful search items",
  "description": "",
  "id": "login;successful-search-items;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter \"rose\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search results with \"rose\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Successful search items",
  "description": "",
  "id": "login;successful-search-items;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@multiple"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter \"iphone\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search results with \"iphone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});