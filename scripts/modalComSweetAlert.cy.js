///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/sweet_alert"]').click()
  })
  describe('Modal com Sweet Alert', () => {
    it('Acessando o item 13', () => {
      cy.contains('QA Ninja')
      cy.get('h3').should('exist').and('be.visible')

      //Aqui ele vai tirar um print que entrou na tela inicial
      cy.screenshot('Estou na tela inicial')

      //Validando o "Botão de Sucesso", clicando nele e tirando um print dele
      cy.get('[class^="btn-success"]')
        .should('exist')
        .and('be.visible')
        .click()
        .screenshot('Botão de Sucesso')

      //Validando se o Modal do Sucesso apareceu
      cy.get('[class^="swal-modal"]').should('exist')
      cy.contains('Tudo certo!')

      //Aqui ele vai tirar um print do Modal aberto
      cy.screenshot('Modal de Sucesso')

      //Validando o botão "OK" dentro do Modal
      cy.get('.swal-button').should('exist').click()

      //Aqui ele vai aguardar 2S antes de começar o segundo teste
      cy.wait(2000)

      //Validando o "Botão de Deu Ruim", clicando nele e tirando um print
      cy.get('.btn-danger')
        .should('exist')
        .and('be.visible')
        .click()
        .screenshot('Botão Deu Ruim')

      //Validando se o Modal Deu Ruim apareceu
      cy.get('.swal-modal').should('exist').click()
      cy.contains('Deu Ruim!')

      //Aqui ele vai tirar um print do Modal aberto
      cy.screenshot('Modal Deu Ruim')

      //Validando o botão "OK" dentro do modal e clicando nele
      cy.get('.swal-button').should('exist').click()

      //Aqui valida se voltou para a tela inicial e tira um print
      cy.contains('QA Ninja')
      cy.get('h3')
        .should('exist')
        .and('be.visible')
        .screenshot('Voltei para a tela inicial')
    })
  })
})
