///<reference types="cypress"/>


describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/radios"]').click()
    cy.wait(2000)
  })
  describe('Acessando o Radio Buttons', () => {
    it('Clicando no item 3', () => {
      cy.contains('QA Ninja')
      cy.get('h3').should('exist').and('be.visible')

      //Opções dos Botões - DESCOBRIR PQ QUEBROU
      //cy.get('[value^="guardians"]').check()  
      cy.get('[id^="cap"]').click()

      cy.get('[src^="/img/old-radio.jpg" ]').screenshot()


    })
  })
})