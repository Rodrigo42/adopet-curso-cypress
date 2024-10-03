describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos corretamente para logar o usuário', () => {
      
      cy.login("rachid3997@uorak.com", "Pass1234")
    })
  })