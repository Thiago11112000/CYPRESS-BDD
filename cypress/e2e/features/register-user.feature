Feature: Register 
          Eu como cliente
          quero me cadastrar na aplicação
          para fazer  um pedido de compra

    Background: Access Register Screen
      Given I am on register screen
      
      Scenario: Campo nome vazio
      When I click on register 
      Then I see message "O campo nome deve ser prenchido" on register screen
      Scenario: Campo e-mail vazio
      And I fill name
      When I click on register 
      Then I see message "O campo e-mail deve ser prenchido corretamente" on register screen
      Scenario: campo e-mail inválido
      And I fill name
      And I fill invalid-email 
      When I click on register 
      Then I see message "O campo e-mail deve ser prenchido corretamente" on register screen
      Scenario: campo senha vazio
      And I fill name
      And I fill email 
      When I click on register 
      Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register screen
      Scenario: campo senha inválido
      And I fill name
      And I fill email 
      And I fill invalid-password
      When I click on register 
      Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register screen
       Scenario: Cadastro de usuário com sucesso
       And I fill valid-password
        Then I see sucess message on register screen

      

      

  
