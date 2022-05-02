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

    it("Page formulaire AVC", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('AVC').click({force: true})
      cy.url().should('include', '/Maladies/AVC')

      cy.contains('Calculer vos risques').click({force: true})
      cy.url().should('include', '/Informations/AVC')
    })

    it("Page risque crise cardiaque", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('Maladies cardiaques').click({force: true})
      cy.url().should('include', '/Maladies/Cardiaque')
    })

    it("Page formulaire crise cardiaque", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('Maladies cardiaques').click({force: true})
      cy.url().should('include', '/Maladies/Cardiaque')

      cy.contains('Calculer vos risques').click({force: true})
      cy.url().should('include', '/Informations/Cardiaque')
    })

    it("Page risque diabète", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('Diabète').click({force: true})
      cy.url().should('include', '/Maladies/Diabete')
    })

    it("Page formulaire diabète", () => {
      cy.visit('http://localhost:4200')

      cy.get('.dropdown-menu li').contains('Diabète').click({force: true})
      cy.url().should('include', '/Maladies/Diabete')

      cy.contains('Calculer vos risques').click({force: true})
      cy.url().should('include', '/Informations/Diabete')
    })

    it("Page bilan général", () => {
      cy.visit('http://localhost:4200')

      cy.contains('Bilan général').click({force: true})
      cy.url().should('include', '/Profile')
    })
  })