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

      //Aqui ele vai tirar um print que entrou na tela inicial
      cy.screenshot('Tela inicial Games')

      //Validando o campo "Nome do Jogo" e preenchendo o mesmo
      cy.get('[id^="game"]').should('exist').and('be.visible')
      cy.get('#game').type('CS')

      //Validando o campo "Preço" e preenchendo o mesmo
      cy.get('[id^="price"]').should('exist').and('be.visible')
      cy.get('[id^="price"]').type('400')

      //Validando o campo "Descrição" e preenchendo o mesmo
      cy.get('[id^="desc"]').should('exist').and('be.visible')
      cy.get('[id^="desc"]').type('Inserindo dados do novo Mapa do CS')

      //Aqui ele tira um print dos dados inseridos
      cy.screenshot('Dados preenchidos')

      //Validando o botão de "Salvar" e enviando os dados
      cy.get('[class^="btn-success save-game"')
        .should('exist')
        .and('be.visible')
        .and('be.enabled')
      cy.get('[class^="btn-success save-game"]').click()

      //Aqui valida se a mensagem de enviando dados apareceu
      cy.contains('Enviado os dados para o servidor...')

      //Aqui ele tira um print dos dados sendo enviados
      cy.screenshot('Dados sendo enviados')

      //Aqui ele vai se os dados apareceram no quadro
      cy.contains('CS')
      cy.contains('Inserindo dados do novo Mapa do CS')
      cy.contains('400')

      //Aqui ele tira um print da tela com os dados novos
      cy.screenshot('Dados novos do game')
    })
  })
})
