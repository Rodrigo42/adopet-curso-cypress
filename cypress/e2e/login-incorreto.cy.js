describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {statusCode: 404,}).as('stubPost')
    })
    it('Deve preencher os campos incorretamente e exibir mensagem de erro para o usuário', () => {
      cy.login('teste@teste.com', 'ASDe123456');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
      
    })

    it('Deve tentar login com campos nulos e exibir mensagem de erro para o usuário', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Insira sua senha').should('be.visible');
    })



  })