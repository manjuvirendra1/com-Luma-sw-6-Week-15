$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gear.feature");
formatter.feature({
  "line": 2,
  "name": "Gear Test",
  "description": "As A user i want to add products successfull to shopping cart",
  "id": "gear-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4141374600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to add products to shopping cart",
  "description": "",
  "id": "gear-test;user-should-be-able-to-add-products-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on bags",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on product name Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the text overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change qty 3",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text You added Overnight Duffle to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click and shopping cart message",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify product price $135.00",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I change Qty to 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on update shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the product price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42982600,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_mouse_hover_on_gear_menu()"
});
formatter.result({
  "duration": 579643300,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_bags()"
});
formatter.result({
  "duration": 1101428100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_product_name_Overnight_Duffle()"
});
formatter.result({
  "duration": 704189100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_verify_the_text_overnight_Duffle()"
});
formatter.result({
  "duration": 79415000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.i_change_qty(int)"
});
formatter.result({
  "duration": 152580600,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 70913400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_verify_text_You_added_Overnight_Duffle_to_your_shopping_cart()"
});
formatter.result({
  "duration": 1455083500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_and_shopping_cart_message()"
});
formatter.result({
  "duration": 3385617600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 24
    },
    {
      "val": "00",
      "offset": 28
    }
  ],
  "location": "GearTestSteps.iProductPrice$(int,int)"
});
formatter.result({
  "duration": 26713100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.i_change_Qty_to(int)"
});
formatter.result({
  "duration": 1349717400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_update_shopping_cart_button()"
});
formatter.result({
  "duration": 45819600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 28
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "GearTestSteps.i_verify_the_product_price_$(int,int)"
});
formatter.result({
  "duration": 2620436400,
  "status": "passed"
});
formatter.after({
  "duration": 605583900,
  "status": "passed"
});
formatter.uri("men.feature");
formatter.feature({
  "line": 2,
  "name": "Men test",
  "description": "As a user I want to add the product in shopping cart",
  "id": "men-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2728218000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to add products in shopping cart",
  "description": "",
  "id": "men-test;user-should-able-to-add-products-in-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on pants",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on cronus yoga pant",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on size 32",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on black colour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text You added Cronus Yoga Pant to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on shopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify product name cronus yoga pant",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify Product size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify the product colour Black",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_men_menu()"
});
formatter.result({
  "duration": 596370600,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_bottoms()"
});
formatter.result({
  "duration": 125294700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_pants()"
});
formatter.result({
  "duration": 877698500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_cronus_yoga_pant()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 16
    }
  ],
  "location": "MenTestSteps.i_click_on_size(int)"
});
formatter.result({
  "duration": 64500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_black_colour()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_add_to_cart()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_text_You_added_Cronus_Yoga_Pant_to_your_shopping_cart()"
});
formatter.result({
  "duration": 8000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_shopping_cart_link()"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_text_Shopping_cart()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_product_name_cronus_yoga_pant()"
});
formatter.result({
  "duration": 11300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 22
    }
  ],
  "location": "MenTestSteps.i_verify_Product_size(int)"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_the_product_colour_Black()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.after({
  "duration": 580411200,
  "status": "passed"
});
formatter.uri("women.feature");
formatter.feature({
  "line": 2,
  "name": "Women Test",
  "description": "As a user I want to verify the products name filter and price filter",
  "id": "women-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2604256900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to sort by product name filter",
  "description": "",
  "id": "women-test;user-should-able-to-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on women menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on jacket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Sort By filter \"Product Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should verify the products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 608080300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 136641000,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacket()"
});
formatter.result({
  "duration": 865493000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Name",
      "offset": 25
    }
  ],
  "location": "WomenTestSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 775311500,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldVerifyTheProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 315677700,
  "status": "passed"
});
formatter.after({
  "duration": 586922000,
  "status": "passed"
});
formatter.before({
  "duration": 2569783800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to sort by price filter",
  "description": "",
  "id": "women-test;user-should-able-to-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on women menu",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on jacket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Sort By filter \"Price\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should verify the products price display in low to high",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 10200,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 600121600,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 126519700,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacket()"
});
formatter.result({
  "duration": 1170238400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 25
    }
  ],
  "location": "WomenTestSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 856921000,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldVerifyTheProductsPriceDisplayInLowToHigh()"
});
formatter.result({
  "duration": 1124822300,
  "status": "passed"
});
formatter.after({
  "duration": 587295100,
  "status": "passed"
});
});