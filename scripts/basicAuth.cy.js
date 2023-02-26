///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/basic_auth"]').click()
  })
  describe('Acessar o Auth', () => { // Descobrir como capturar a tela de inserir dados
    it('', () => {
      
      cy.get('ok')
    })
  })
})
