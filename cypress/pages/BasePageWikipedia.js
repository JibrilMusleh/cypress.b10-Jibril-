class BasePageWikipedia {

    getLogoWikipedia() {
        return cy.get('[class$="wordmark"]')
    }

    getSloganText() {
        return cy.get('[class$="slogan"]')
    }

}

export default BasePageWikipedia