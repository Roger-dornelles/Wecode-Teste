/* eslint-disable spaced-comment */
/// <reference types="cypress" />

describe('Testing the Home Page', () => {
    beforeEach(() => cy.visit('/'))

    it('expected to select home elements', () => {
        cy.get('button').contains('Conheça agora!').click()
        cy.get('.banner-dots li').should('have.class', 'slick-active').click({ multiple: true })
        cy.get('.categories-title').contains('Categorias')
        cy.get('.releases-slide-container div').should('have.class', 'releases-icon-favorite')
        cy.get('.footer-policy a').should('have.class', 'footer-link')
        cy.get('.footer-link').click({ multiple: true })
    })

    it('menu modal is expected to contain elements', () => {
        cy.get('.modal-header div').should('have.class', 'close-modal')
        cy.get('.navigation li').click({ multiple: true, force: true })
        cy.get('.description div').should('have.class', 'shoes-menu')
        cy.get('.description [data-cy="shoes-menu"').click().get('.shoes li').should('contain', 'Sapatilhas')
        cy.get('.description div').should('have.class', 'my-favorites').click({ multiple: true })
    })
})
