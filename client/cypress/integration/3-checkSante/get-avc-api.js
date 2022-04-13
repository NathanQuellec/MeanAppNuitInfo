describe('Test API AVC GET', () => {
    it('successfully loads', () => {
        cy.request('GET', 'http://localhost:3000/diagnostics/avc').then((response) => {
            expect(response.status).to.eq(200)
            //expect(response.body).to.have.length(500)
            //expect(response).to.have.property('headers')
            //expect(response).to.have.property('duration')
        })
    })
})