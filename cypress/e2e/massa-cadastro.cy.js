import { usuarios } from '../fixtures/usuarios.json'

describe('Pagina de cadastro com massa de dados', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuarios => {
        it('Deve prencher um cadastro para cada usuário da massa de dados', () =>{
            cy.get('[data-test="input-name"]').clear().type(usuarios.name);
            cy.get('[data-test="input-email"]').clear().type(usuarios.email);
            cy.get('[data-test="input-password"]').clear().type(usuarios.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuarios.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })
})