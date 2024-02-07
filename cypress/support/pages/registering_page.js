/// <reference types = "cypress"/>


export default{
    
    doRegister(){
        cy.get('#btnRegister')
        .should('be.visible')
        .click()
        },
    checkErrokMessageOfRegister(message){
    cy.get(".errorLabel")
    .should('be.visible')
    .should('have.text', message)    
    },
    fillName(name){
    cy.get('#user')
    .should('be.visible')
    .type(name)
    },
    fillEmail(email){
        cy.get('#email')
        .should('be.visible')
        .type(email)
        },
        fillPassword(password){
            cy.get('#password')
            .should('be.visible')
            .type(password)
            },
            checkSucessMessageOfRegister(name){
            cy.get("#swal2-title")
            .should("be.visible")
            .should("have.text", "Cadastro realizado!")

            cy.get("#swal2-html-container")
            .should("be.visible")
            .should("have.text", `Bem-vindo ${name}`)
            }
}