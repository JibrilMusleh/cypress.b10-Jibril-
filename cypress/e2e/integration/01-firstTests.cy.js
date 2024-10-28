describe('My First Tests', function() {


    it('Visit TechGlobal training app homepage', () => {

        cy.visit('https://techglobal-training.com/')

        cy.reload();

        cy.visit('https://techglobal-training.com/')

        //cy.go('back')
        //cy.go('-1')


        //cy.go('forward')
        cy.go('1')

        cy.title().should('eq', 'Techglobal Training | Home')

        cy.url().should('contain', 'https://www.techglobal-training.com/')
    }) 

    it('My first test', () => {

    //expect(true).to.equal(false)

    cy.visit('https://techglobal-training.com/')

    // cy.get('#logo').click()
    // cy.get('#logo').should('be.visible')

     cy.get('#logo').click().should('be.visible')

    })
})