
Feature: Login 
    Eu como cliente
    Quero fazer Login na aplicação
    Para fazer um pedido de compra

    Scenario:  Login com campo e-mail vazio
        Given  I am on login screen
        When  I click on login
        Then  I see the message "E-mail inválido."

    # Scenario:  Login com campo senha vazio
    #     Given I am on login screen
    #     And   Fill e-mail
    #     When  I click on login
    #     Then  I see the message "Senha inválida."

    # Scenario:  Login com campo senha vazio
    #     Given I am on login screen
    #     And  I fill all credentials
    #     When  I click on login
    #     Then  I see success message