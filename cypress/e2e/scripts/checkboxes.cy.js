///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/checkboxes"]').click()
    cy.wait(2000)
  })
  describe('Acessar o Checkboxes', () => {
    it('Clicando no item 2', () => {
      cy.contains("QA Ninja")
      cy.get('h3').should('exist').and('be.visible')

      //Opções - marcar e desmarcar, deixar apenas a do "Guardiões da Galáxia"
      cy.get('[value^="cap"]').check()
      cy.get('[value^="cap"]').check().uncheck()

      cy.get('[value^="iron-man"]').check()
      cy.get('[value^="iron-man"]').check().uncheck()

      cy.get('[value^="thor"]').check()
      cy.get('[value^="thor"]').check().uncheck()

      cy.get('[value^="the-avengers"]').check()
      cy.get('[value^="the-avengers"]').check().uncheck()

      cy.get('[value^="guardians"]').check()

      cy.get('[value^="ant-man"]').check()
      cy.get('[value^="ant-man"]').check().uncheck()

      cy.get('[value^="black-panther"]').check()
      cy.get('[value^="black-panther"]').check().uncheck()

      cy.screenshot('Checkboxes')
    })
  })
})
