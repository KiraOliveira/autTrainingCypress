///<reference types="cypress"/>

describe('Acessar o site', () => {
  before(() => {
    cy.visit('https://qautomatizado-db08c.web.app/')
    cy.get('.MuiButton-label').click()
  })
  describe('Formulário de teste', () => {
    it('Preenchendo os campos', () => {
      //Validando o campo "Nome" antes de inserir os dados é possível fazer nos demais também
      cy.get('[id^="id_campo_nome"]')
        .should('exist')
        .and('be.visible')
        .and('be.enabled')

      //1 - Campos para preencher com texto
      cy.get('[id^="id_campo_nome"]').type('Kira')
      //cy.get('[id^="id_campo_sobrenome"]').type('Oliveira'); // pode ser feito assim ou
      //cy.xpath('//*[@id="id_campo_sobrenome"]').type('Oliveira'); assim usando o xpath ou igual o abaixo
      cy.get('#id_campo_sobrenome').type('Oliveira')
      cy.get('[id^="id_campo_email"]').type('kira@email.com')
      cy.get('[id^="id_campo_descricao"]')
        .type('Teste Kira inserindo texto')
        .screenshot('Renomear')
        .debug()

      //2 - Botão
      cy.get('[id^="id_Linkedin"]').click()

      //Aqui ele esperar 5S para continuar os testes abaixo
      cy.wait(5000)

      //4 -Campos para clicar e selecionar
      cy.get('[id^="id_campo_linguagemProgramacaoSimples"]').select('PYTHON')

      //Esse comando Pausa os testes, pra continuar precisa clicar em "Play" dentro da aplicação
      //cy.pause()

      //5 - Input
      cy.get('#mui-component-select-linguagemProgramacao').type('Python')
      cy.timeout({ timeout: 5000 }) //Aqui ele não espera pelo tempo de 5S ele já executa
      cy.get('body').type('{enter}')

      //6 - Input
      const tags = ['C#', 'Javascript', 'Python']
      tags.forEach(valor => {
        cy.get('input[aria-invalid^="false"][name^="multiplaSelecao"]').type(
          valor
        )
        cy.get('input[aria-invalid^="false"][name^="multiplaSelecao"]').type(
          '{downArrow}'
        )
        cy.get('input[aria-invalid^="false"][name^="multiplaSelecao"]').type(
          '{enter}'
        )
      })

      //7 - Checkbox
      cy.get('#id_checkbox_cypress').check() //Aqui ele apenas marca o checkbox
      cy.get('#id_checkbox_appium').check().uncheck() //Aqui ele marca o checkbox e desmarca
      cy.get('#id_checkbox_robotFramework').check() //Aqui ele apenas marca o checkbox

      //8 - Selecionar aquivo

      cy.screenshot('Full Screen')

      //Estou na aula 4
    })
  })
})
