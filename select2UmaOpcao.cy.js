///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/apps/select2/single.html"]').click()
  })
  describe('Acessando o Select 2 - Uma opção', () => {
    it('Clicando no item 6', () => {
      cy.contains('Select2 Atores')
      cy.get('h1').should('exist').and('be.visible')

      //Selecionando o Jim Carrey e clica no botão
      cy.get('[role^="combobox"]').type('Jim Carrey')
      cy.timeout({timeout:5000})
      cy.get('body').type('{enter}')

      //Aqui tira um print do teste
      cy.get('[type^="button"]').click().screenshot('Jim Carrey')

      //Aqui aguarda 2S para refazer o teste
      cy.wait(2000)

      //Aqui ele clica no botão para o teste ser reiniciado
      cy.get('[type^="button"]').click()

      //Aqui seleciona Owen Wilson
      cy.get('[role^="combobox"]').type('Owen Wilson')
      cy.timeout({timeout:5000})
      cy.get('body').type('{enter}')

      //Aqui tira um print do teste
      cy.get('[type^="button"]').click().screenshot('Owen Wilson')

      //Aqui aguarda 2S para fazer um novo teste
      cy.wait(2000)

      //Aqui clica no botão para o teste ser reiniciado
      cy.get('[type^="button"]').click()

      //Aqui ele faz mas uma vez o teste
      //Clicando em "Adam Sandler"
      //Escrevendo apenas o início do nome "Adam"
      cy.get('[role^="combobox"]').type('Adam')
      cy.timeout({timeout:5000})
      cy.get('[aria-selected^="false"]').click()
      cy.get('body').type('{enter}')

      //Aqui tira um print do teste
      cy.get('[type^="button"]').click().screenshot('Adam Sandler')

      //Aqui aguarda 2S para fazer novo teste
      cy.wait(2000)

      //Aqui clicar no botão para o teste ser reiniciado
      cy.get('[type^="button"]').click()

      //Aqui o teste será feito colocando uma parte do nome "Kevin James"
      //Clicando no nome "Kevin James"
      //Escreve apenas uma parte do segundo nome "Jam"
      cy.get('[role^="combobox"]').type('Jam')
      cy.timeout({timeout:5000})
      cy.get('[aria-selected^="false"]').click()
      cy.get('body').type('{enter}')

      //Aqui tira um print do teste
      cy.get('[type^="button"]').click().screenshot('Kevin James')


      


      


    })
  })
})