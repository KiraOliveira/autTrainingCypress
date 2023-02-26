///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/access"]').click()
  })
  describe('Realizando o Cadastro', () => {
    it('Acessando o item 12', () => {
      cy.contains('QA Ninja')
      cy.get('h2').should('exist').and('be.visible')

      //Realizando o cadastro
      cy.get('[id^="PortalTheme_wt10_block_wtcontent_holder_wt8_wtUsernameInput"]').type('Kira')
      cy.get('[id^="PasswordInput_wt11_PortalTheme_wt7_block_wtcontent_holder_wt8_wt"]').type('1234')
      cy.get('[class^="fa fa-2x fa-plus"]').click()

      cy.contains('Dados enviados. Aguarde aprovação do seu cadastro!')

      cy.screenshot('Login com Cadastro')
    })
  })
})