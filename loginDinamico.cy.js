///<reference types="cypress"/>

describe('Automatizer site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/login2"]').click()
  })
  describe('Realizando o login com o campo Randômico', () => {
    it('Acessando o item 11', () => {
      cy.contains('QA Ninja')
      cy.get('h2').should('exist').and('be.visible')

      //Inserindo os dados para realizar o login
      cy.get('[name^="username"]').should('exist').and('be.visible').and('be.enabled')

      cy.get('[name^="username"]').type('STARK')
      cy.get('[name^="password"]').type('JARVIS!')
      cy.get('[name^="bday"]').type('29/05/1970')

      cy.get('[class^="fa fa-2x fa-sign-in"]').click()

      cy.contains('O usuário informado não está cadastrado!').screenshot('Login Dinâmico')
    })
  })
})
