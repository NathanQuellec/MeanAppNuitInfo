describe('Visite du site', () => {
  it('Racine', () => {
    cy.visit('http://localhost:4200')
    
    cy.url().should('include', '/')
  })

  it("Page d'accueil", () => {
    cy.visit('http://localhost:4200')

    cy.contains("CheckSanté").click({force: true})
    cy.url().should('include', '/Accueil')
  })

  it("Page risque AVC", () => {
    cy.visit('http://localhost:4200/Maladies/AVC')

    cy.contains('Calculer vos risques').click({force: true})
    cy.url().should('include', '/Informations/AVC')
  })

  it("Page risque crise cardiaque", () => {
    cy.visit('http://localhost:4200/Maladies/Cardiaque')

    cy.contains('Calculer vos risques').click({force: true})
    cy.url().should('include', '/Informations/Cardiaque')
  })

  it("Page risque diabète", () => {
    cy.visit('http://localhost:4200/Maladies/Diabete')
    
    cy.contains('Calculer vos risques').click({force: true})
    cy.url().should('include', '/Informations/Diabete')
  })

  it("Page bilan général", () => {
    cy.visit('http://localhost:4200')

    cy.contains('Bilan général').click({force: true})
    cy.url().should('include', '/Profile')
  })
})