describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZjQ0OTAzYi0wM2JhLTRkODUtYmY2Yi1kZjdmOTkzZGNiMjQiLCJhZG9wdGVyTmFtZSI6IlRlc3RlIEFkb3BldCIsImlhdCI6MTcyODUxNjkwMSwiZXhwIjoxNzI4Nzc2MTAxfQ.S2JSWa9ar5OxeQ2QNXt1GOOMF8xfgh9COlDtk3pBzwM`

    it('Mensagens', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/af44903b-03ba-4d85-bf6b-df7f993dcb24',
            headers: { authorization }

        })
        .then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })

})