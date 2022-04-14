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

    it("Page profil", () => {
      cy.visit('http://localhost:4200')

      cy.contains("Profil").click({force: true})
      cy.url().should('include', '/Profil')
    })

    it("Page formulaire personnel", () => {
      cy.visit('http://localhost:4200')

      cy.contains("Mes données").click({force: true})
      cy.url().should('include', '/Informations')
    })


    it("Page risque AVC", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('AVC').click({force: true})
      cy.url().should('include', '/Maladies/AVC')
    })

    it("Page risque crise cardiaque", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('Crise cardiaque').click({force: true})
      cy.url().should('include', '/Maladies/Heart')
    })

    it("Page risque diabète", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('Diabète').click({force: true})
      cy.url().should('include', '/Maladies/Diabete')
    })

    it("Page bilan général", () => {
      cy.visit('http://localhost:4200')

      cy.contains('Bilan général').click({force: true})
      cy.url().should('include', '/Bilan')
    })

    it("Page déconnexion", () => {
      cy.visit('http://localhost:4200')

      cy.contains('Bilan général').click({force: true})
      cy.url().should('include', '/Deconnexion')
    })
  })