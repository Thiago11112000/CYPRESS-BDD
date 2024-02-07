/// <reference types = "cypress"/>

export default{
  doLogin(){
    cy.get('#btnLogin')
    .should('be.visible')
    .click();
  },
  checErrorkMessage(messagen){
    cy.get('.invalid_input')
    .should('have.text', messagen )
  },
fillEmail(email){
    cy.get('#user')
    .should('be.visible')
    .type(email)
},
fillPassword(password){
    cy.get('#password')
    .should('be.visible')
    .type(password)
},
 checkSucessMessage(email){
cy.get('#swal2-title')
.should('be.visible')
.should('have.text','Login realizado')

cy.get('#swal2-html-container')
.should('be.visible')
.should('have.text', `Olá, ${email}`)
 }

}