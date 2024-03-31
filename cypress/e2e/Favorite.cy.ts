/* eslint-disable spaced-comment */
/// <reference types="cypress" />

describe('Testing the cart Favorite', () => {
    beforeEach(() => cy.visit('/Favoritos'))

    it('expected to select cart elements', () => {
        cy.get('.favorites-button-back').should('exist')
        cy.get('.favorites-button-back').should('have.text', 'Voltar')
        cy.get('.favorites-button-back').click()
        cy.visit('/Favoritos')
        cy.get('.favorite-not-favorite p').should('exist')
        setTimeout(() => {
            cy.get('.favorites-not-favorites p').should('have.text', 'favorito')
        }, 2500)
    })
})
