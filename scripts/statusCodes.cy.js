///<reference types="cypress"/>

//Esse vai ter que arrumar também, pois ele fica quebrando quando entra na tela

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/status_codes"]').click()
  })
  describe('Status Codes', () => {
    it('Acessando o item 14', () => {
      cy.contains('QA Ninja')
      cy.get('h3').should('exist').and('be.visible')

      //Aqui ele vai tirar um print da tela inicial
      //cy.screenshot('Estou na tela dos Codes')

      //CODE 200
      //Validando se o code 200 apareceu e clicando nele
      cy.get('[href^="status_codes/200"]')
        .should('exist')
        .and('be.visible')
        .click()

      //Aqui valida se estamos na tela do Code 200
      //cy.contains('Status Codes')
      //cy.contains('Esta página retornou o código de status 200 status code.')

      //Aqui ele tira um print da tela do Código 200
      //cy.screenshot('Code 200')

      //Aqui clica no "Voltar" para retornar na tela inicial
      //cy.get('[href="/status_codes"]').should('exist').and('be.visible').click()

      //Aqui ele tira um print, mostrando que retornou para tela inicial
      //cy.screenshot('Tela inicial')

      //*******************************************************/

      //CODE 301
      //Validando se o code 301 apareceu e clicando nele
      /*cy.get('[href^="status_codes/301"]')
        .should('exist')
        .and('be.visible')
        .click()

      //Aqui valida se estamos na tela do Code 301
      cy.contains('Status Codes')
      cy.contains('Esta página retornou o código de sattus 301 status code.')

      //Aqui ele tira um print da tela do Código 301
      //cy.screenshot('Code 301')

      //Aqui clica no "Voltar" para retornar na tela inicial
      cy.get('[href^="/status_codes"]')
        .should('exist')
        .and('be.visible')
        .click()

      //*******************************************************/

      //CODE 404
      //Validando se o code 404 apareceu e clicando nele
      /*cy.get('[href^="status_codes/404"]')
        .should('exist')
        .and('be.visible')
        .click()

      //[href^="/status_codes"]*/
    })
  })
})
