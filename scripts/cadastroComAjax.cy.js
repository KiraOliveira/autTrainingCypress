///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/games"]').click()
  })
  describe('Cadastro com Ajax', () => {
    it('Acessando o item 15', () => {
      cy.contains('QA Ninja')
      cy.get('h3').should('exist').and('be.visible')
    })
  })
})
