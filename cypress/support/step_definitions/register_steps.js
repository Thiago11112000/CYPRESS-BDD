/// <reference types = "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import registering_page from "../pages/registering_page";
import { faker } from "@faker-js/faker";


const name =  faker.person.fullName()
const randomemail = faker.internet.email();
const password = "123456"
    Given("I am on register screen", ()=>{
    home_page.acessRegister()
    })
    Given("I fill name", () =>{
    registering_page.fillName(name)
    })
    Given("I fill invalid-email", ()=>{
        registering_page.fillEmail(name)
    })
    Given("I fill email",()=>{
        registering_page.fillName(name)
        registering_page.fillEmail(randomemail)
    })
    Given("I fill invalid-password",()=>{
        registering_page.fillPassword("123")
    })
    Given("I fill valid-password", ()=>{
        registering_page.fillName(name)
        registering_page.fillEmail(randomemail)
        registering_page.fillPassword(password)
        registering_page.doRegister()
    })
    When("I click on register", () =>{
        registering_page.doRegister()
        });
        Then("I see message {string} on register screen",  (message) => {
           registering_page.checkErrokMessageOfRegister(message)
            });
            Then("I see sucess message on register screen", ()=>{
                registering_page.checkSucessMessageOfRegister(name)
             })
           




