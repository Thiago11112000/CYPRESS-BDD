
/// <reference types = "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";
import { faker } from '@faker-js/faker';

const email = faker.internet.email();;
const password = '123456'

Given("I am on login screen", ()=>{
    home_page.acessLogin()
    })
    Given("I fill e-mail", ()=>{
    login_page.fillEmail(email)
        })
        Given("I fill all credentials", ()=>{
            login_page.fillEmail(email)
            login_page.fillPassword(password)
    
                })
    When("I click on login", ()=>{
    login_page.doLogin()
    })
    Then("I see the message {string}", (message)=>{
    login_page.checErrorkMessage(message)
    })
    Then("I see success message",  ()=>{
       login_page.checkSucessMessage(email)
        })
        