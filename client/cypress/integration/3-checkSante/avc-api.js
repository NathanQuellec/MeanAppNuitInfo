describe('Test API', () => {
    it('POST AVC', () => {
        cy.visit('http://localhost:4200/Maladies/AVC')

        cy.contains("Calculer vos risques d'AVC").click({force: true})
        cy.url().should('include', '/Informations/AVC')
        
        cy.request('POST', 'http://localhost:3000/diagnostics/avc', {
            gender: 1,
            age: 24,
            hypertension: 1,
            heartDisease: 1,
            married: 0,
            work_type: 3,
            residence: 1,
            glucose: 90,
            bmi: 25,
            smoking_status: 1
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

        cy.visit('http://localhost:4200/Maladies/AVC')


        cy.request('GET', 'http://localhost:3000/diagnostics/avc').then((response) => {
            expect(response.status).to.eq(200)
        })

    })
})