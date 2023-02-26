///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/dropdown"]').click()
  })
  describe('Acessando o Dropdown', () => {
    it('Clicando no item 5', () => {
      cy.contains('QA Ninja')
      cy.get('h3').should('exist').and('be.visible')

      //Selecionando uma opção
      cy.get('[id^="dropdown"]').select('Loki')

      cy.screenshot('Dropdown')

    })
  })
})