/// <reference types="cypress"/>

import BasePageWikipedia from "../../pages/BasePageWikipedia";

const basePageWikipedia = new BasePageWikipedia();

describe('Practice03', () => {
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org/');
        cy.fixture('example').then(function(data) {
            this.logo = data.logo
            this.slogan = data.slogan
        });
    });
    it('TASK-1: Validate the Wikipedia Logo and Slogan', function () {
        basePageWikipedia.getLogoWikipedia().should('contains.text', this.slogan)

    });

    it('TASK-2: Validate the Wikipedia Top Ten Languages', () => {

    });

    it('TASK-3: Validate the Wikipedia Search Results', () => {

    });

    it('TASK-4: Validate the Wikipedia Article Numbers for All Languages', () => {

    });

});