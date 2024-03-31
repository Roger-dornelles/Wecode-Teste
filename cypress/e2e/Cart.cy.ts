/* eslint-disable spaced-comment */
/// <reference types="cypress" />

describe('Testing the cart Page', () => {
    beforeEach(() => cy.visit('/Compras'))

    it('expected to select cart elements', () => {
        cy.get('.cart-title').should('exist')
        cy.get('.cart-not-product').should('contain', 'Opss')
        cy.get('.cart-button-back').should('have.text', 'Voltar')
        cy.get('.cart-button-back').click()
    })

    it('expected add items to cart', () => {
        cy.get('.cart-button-back').click()
        cy.get('.releases-icon-add').should('exist')
        cy.get('.releases-icon-add').should('exist').parent().click({ force: true, multiple: true })
        cy.get('.navigation [data-cy="cart-white"]').should('exist').click()
    })
})
