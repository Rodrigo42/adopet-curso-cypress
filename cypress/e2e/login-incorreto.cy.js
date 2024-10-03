describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        
    })
    it('Deve preencher os campos incorretamente e exibir mensagem de erro para o usuário', () => {
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="input-loginEmail"]').type("monaim9936");
      cy.get('[data-test="input-loginPassword"]').type("passteste1");
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
      
    })
  })