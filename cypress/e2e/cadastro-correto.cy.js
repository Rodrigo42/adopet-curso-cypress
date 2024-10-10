describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"').click();
  })
  it('Deve preencher os campos corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('ibana6321@uorak.com', 'Pass1234', 'Teste Nome')
  })
})