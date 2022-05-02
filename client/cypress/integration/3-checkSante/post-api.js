describe('Post API', () => {

    it('POST User', () => {
        cy.visit('http://localhost:4200/Informations')
        
        cy.get('#name').type("Le Men")
        cy.get('#surname').type("Yann")
        cy.get('#checkGenre1').check({force: true}).click({force: true})
        cy.get('#age').clear()
        cy.get('#age').type("24")
        cy.get('#checkHabitation1').check({force: true}).click({force: true})
        cy.get('#checkSport2').check({force: true}).click({force: true})
        cy.get('#checkFruit2').check({force: true}).click({force: true})
        cy.get('#checkLegume2').check({force: true}).click({force: true})
        cy.get('#address').type("Nanterre")
        cy.get('#email').type("@parisnanterre.com")
        cy.contains("Enregistrer").click({force: true})

        cy.request('POST', 'http://localhost:3000/users', {
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
    })

    it('POST AVC', () => {
        cy.visit('http://localhost:4200/Maladies/AVC')

        cy.contains("Calculer vos risques").click({force: true})
        cy.url().should('include', '/Informations/AVC')
        
        cy.get('#checkGenre1').check({force: true}).click({force: true})
        cy.get('#age').clear()
        cy.get('#age').type("24")
        cy.get('#checkHypertension2').check({force: true}).click({force: true})
        cy.get('#checkHeartDisease2').check({force: true}).click({force: true})
        cy.get('#checkMarried2').check({force: true}).click({force: true})
        cy.get('#checkResidence1').check({force: true}).click({force: true})
        cy.get('#glucose').clear()
        cy.get('#glucose').type("90")
        cy.get('#bmi').clear()
        cy.get('#bmi').type("25")
        cy.contains("Calculer").click({force: true})

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

        cy.request('GET', 'http://localhost:3000/diagnostics/avc').then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('POST Cardiaque', () => {
        cy.visit('http://localhost:4200/Maladies/Cardiaque')

        cy.contains("Calculer vos risques").click({force: true})
        cy.url().should('include', '/Informations/Cardiaque')
        
        cy.get('#checkGenre1').check({force: true}).click({force: true})
        cy.get('#age').clear()
        cy.get('#age').type("24")
        
        cy.get('#pression').clear()
        cy.get('#pression').type("50")
        cy.get('#chrolesterol').clear()
        cy.get('#chrolesterol').type("50")
        cy.get('#checkGlycemie2').check({force: true}).click({force: true})
        cy.get('#rythme').clear()
        cy.get('#rythme').type("120")
        cy.get('#checkAngine2').check({force: true}).click({force: true})
        cy.get('#oldpeak').clear()
        cy.get('#oldpeak').type("5")
        cy.contains("Calculer").click({force: true})

        cy.request('POST', 'http://localhost:3000/diagnostics/cardiaque', {
            Age: 24,
            Sex: 0,
            ChestPainType: 0,
            RestingBP: 120,
            Cholesterol: 50,
            FastingBS: 120,
            RestingECG: 0,
            MaxHR: 0,
            ExerciseAngina: 0,
            Oldpeak: 5,
            ST_Slope: 0
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

        cy.request('GET', 'http://localhost:3000/diagnostics/cardiaque').then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('POST Diabète', () => {
        cy.visit('http://localhost:4200/Maladies/Diabete')

        cy.contains("Calculer vos risques").click({force: true})
        cy.url().should('include', '/Informations/Diabete')
        
        cy.get('#checkHypertension2').check({force: true}).click({force: true})
        cy.get('#checkCholesterol2').check({force: true}).click({force: true})
        cy.get('#checkCholCheck2').check({force: true}).click({force: true})
        cy.get('#bmi').clear()
        cy.get('#bmi').type("25")
        cy.get('#checkSmoke2').check({force: true}).click({force: true})
        cy.get('#checkStroke2').check({force: true}).click({force: true})
        cy.get('#checkHeart2').check({force: true}).click({force: true})
        cy.get('#checkPhysActivity2').check({force: true}).click({force: true})
        cy.get('#checkFruits2').check({force: true}).click({force: true})
        cy.get('#checkVeggies2').check({force: true}).click({force: true})
        cy.get('#checkAlcohol2').check({force: true}).click({force: true})
        cy.get('#checkHealthcare1').check({force: true}).click({force: true})
        cy.get('#checkNoDocbcCost2').check({force: true}).click({force: true})
        cy.get('#mentHlth').clear()
        cy.get('#mentHlth').type("30")
        cy.get('#physHlth').clear()
        cy.get('#physHlth').type("7")
        cy.get('#checkDiffWalk2').check({force: true}).click({force: true})
        cy.get('#checkGenre1').check({force: true}).click({force: true})
        cy.contains("Calculer").click({force: true})

        cy.request('POST', 'http://localhost:3000/diagnostics/diabete', {
            HighBP: 0,
            HighChol: 0,
            CholCheck: 0,
            BMI: 25,
            Smoker: 0,
            Stroke: 0,
            HeartDiseaseorAttack: 0,
            PhysActivity: 0,
            Fruits: 0,
            Veggies: 0,
            HvyAlcoholConsump: 0,
            AnyHealthcare: 0,
            NoDocbcCost: 0,
            GenHlth: 3,
            MentHlth: 30,
            PhysHlth: 7,
            DiffWalk: 0,
            Sex: 2,
            Age: 24,
            Education: 6,
            Income: 7
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

        cy.request('GET', 'http://localhost:3000/diagnostics/diabete').then((response) => {
            expect(response.status).to.eq(200)
        })

    })
})