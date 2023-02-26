///<reference types="cypress"/>

describe('Automatizar site', () => {
  before(() => {
    cy.visit('http://training-wheels-protocol.herokuapp.com/')
    cy.get('[href^="/apps/select2/multi.html"]').click()
  })
  describe('Acessando o Select 2 - Multiplas opções', () => {
    it('Clicando o item 7', () => {
      cy.contains('Select2 Atores')
      cy.get('h1').should('exist').and('be.visible')

      //Aqui é o teste com a opção 1 - Input
      const option1 = ['Jim Carrey']
      option1.forEach(valor => {
        cy.get('input[class^="select2-search__field"][type^="search"]').type(valor)
        cy.get('input[class^="select2-search__field"][type^="search"]').type('{downArrow}')
        cy.get('input[class^="select2-search__field"][type^="search"]').type('{enter}')

        //Aqui ele desmarca a opção selecionada anteriormente
        cy.get('[class^="select2-selection__choice__remove"][role^="presentation"]').click()

      })

      //Aqui é o teste com a opção 2
      const option2 = ['Kevin James', 'Adam Sandler','Owen Wilson']
      option2.forEach(valor => {
        cy.get('input[class^="select2-search__field"][type^="search"]').type(valor)
        cy.get('input[class^="select2-search__field"][type^="search"]').type('{downArrow}')
        cy.get('input[class^="select2-search__field"][type^="search"]').type('{enter}')
        
        cy.screenshot('option2')
      })              
    })
  })
})