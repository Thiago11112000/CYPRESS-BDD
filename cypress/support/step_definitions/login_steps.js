
/// <reference types = "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
Given("I am on login screen", ()=>{
home_page.acessLogin()
})
When("I click on login", ()=>{

})
Then("I see the message {string}", (message)=>{

})

