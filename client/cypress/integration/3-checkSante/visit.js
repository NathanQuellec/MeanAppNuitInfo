describe('Visite du site', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:4200')

      cy.contains("CheckSanté").click({force: true})
      cy.url().should('include', '/Accueil')

      cy.contains("Profil").click({force: true})
      cy.url().should('include', '/Profil')
    })
  })