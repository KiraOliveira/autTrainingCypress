///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.contains("QA Ninja")
    cy.get('[href^="/drag_and_drop"]').click()
    cy.wait(2000)
  })
  describe('Acessando Drag and Drop', () => {
    it('Clicando no item 4', () => {
      cy.contains("QA Ninja")
      cy.get('h3').should('exist').and('be.visible')

      //Pesquisar mais sobre o Drag Drop
      //cy.get('[class^="avenger"]').drag('[class^="column"]')
    })
  })
})