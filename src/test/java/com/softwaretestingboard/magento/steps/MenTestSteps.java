package com.softwaretestingboard.magento.steps;

import com.softwaretestingboard.magento.pages.HomePage;
import com.softwaretestingboard.magento.pages.MenPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MenTestSteps {

    @When("^I mouse hover on men menu$")
    public void i_mouse_hover_on_men_menu()  {
        new HomePage().mouseHoverOnMenMenu();
    }

    @When("^I mouse hover on bottoms$")
    public void i_mouse_hover_on_bottoms()  {
        new HomePage().mouseHoverOnBottom();
    }

    @When("^I click on pants$")
    public void i_click_on_pants()  {
        new MenPage().clickPants();
    }

    @When("^I mouse hover on cronus yoga pant$")
    public void i_mouse_hover_on_cronus_yoga_pant()  {

    }

    @When("^I click on size (\\d+)$")
    public void i_click_on_size(int arg1)  {

    }

    @When("^I click on black colour$")
    public void i_click_on_black_colour()  {

    }

    @When("^I click on add to cart$")
    public void i_click_on_add_to_cart()  {

    }

    @Then("^I verify text You added Cronus Yoga Pant to your shopping cart$")
    public void i_verify_text_You_added_Cronus_Yoga_Pant_to_your_shopping_cart()  {

    }

    @Then("^I click on shopping cart link$")
    public void i_click_on_shopping_cart_link()  {

    }

    @Then("^I verify text Shopping cart$")
    public void i_verify_text_Shopping_cart()  {

    }

    @Then("^I verify product name cronus yoga pant$")
    public void i_verify_product_name_cronus_yoga_pant()  {

    }

    @Then("^I verify Product size (\\d+)$")
    public void i_verify_Product_size(int arg1)  {

    }

    @Then("^I verify the product colour Black$")
    public void i_verify_the_product_colour_Black()  {


    }
}
