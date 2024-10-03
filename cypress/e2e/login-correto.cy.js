describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos corretamente para logar o usuário', () => {
      
      cy.get('[data-test="input-loginEmail"]').type("monaim9936@uorak.com");
      cy.get('[data-test="input-loginPassword"]').type("passTeste1");
      cy.get('[data-test="submit-button"]').click();
    })
  })