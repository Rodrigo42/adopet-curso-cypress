describe('template spec', () => {
  it('Deve preencher os campos corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"').click();
    cy.get('[data-test="input-name"]').type("Teste");
    cy.get('[data-test="input-email"]').type("rachid3997@uorak.com");
    cy.get('[data-test="input-password"]').type("passTeste1");
    cy.get('[data-test="input-confirm-password"]').type("passTeste1");
    cy.get('[data-test="submit-button"]').click();
  })
})