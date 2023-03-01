///<reference types="cypress"/>

import loc from '../support/locators'

describe('Acessar o site', () => {
  before(() => {
    cy.visit('https://qautomatizado-db08c.web.app/')
    cy.get('.MuiButton-label').click()
  })
  describe('Formulário de teste', () => {
    it('Preenchendo os campos', () => {
      //Validando o campo "Nome" antes de inserir os dados é possível fazer nos demais também
      cy.get(loc.CAMP_TXT.nome)
        .should('exist')
        .and('be.visible')
        .and('be.enabled')

      //1 - Campos para preencher com texto
      cy.get(loc.CAMP_TXT.nome).type('Kira')
      cy.wait(2000)
      //cy.get('[id^="id_campo_sobrenome"]').type('Oliveira'); // pode ser feito assim ou
      //cy.xpath('//*[@id="id_campo_sobrenome"]').type('Oliveira'); assim usando o xpath ou igual o abaixo

      cy.get(loc.CAMP_TXT.sobrenome).type('Oliveira').clear() //Aqui ele limpa o campo

      cy.wait(2000) //Coloquei esse Wait para verificar com o o comando clear funciona
      cy.get(loc.CAMP_TXT.sobrenome).type('Oliveira')
      cy.get(loc.CAMP_TXT.email).type('kira@email.com')
      cy.get(loc.CAMP_TXT.descricao).type('Teste Kira inserindo texto')
      //.screenshot('Renomear')
      //.debug()

      //Aqui ele faz reload do campos acima, mas continua preenchendo os abaixo, para ele parar de preencher tem que colocar Only no bloco de testes acima
      //cy.reload()

      //2 - Botão
      cy.get(loc.CAMP_RADIO.linkedin).click()

      //Aqui ele esperar 5S para continuar os testes abaixo
      cy.wait(3000)

      //4 -Campos para clicar e selecionar
      cy.get(loc.CAMP_SELECT.simples).select('PYTHON')

      //Esse comando Pausa os testes, pra continuar precisa clicar em "Play" dentro da aplicação
      //cy.pause()

      //5 - Input
      cy.get(loc.CAMP_SELECT.avance).type('Python')
      cy.timeout({ timeout: 5000 }) //Aqui ele não espera pelo tempo de 5S ele já executa
      cy.get('body').type('{enter}')

      //6 - Input
      const tags = ['C#', 'Javascript', 'Python']
      tags.forEach(valor => {
        cy.get(loc.CAMP_SELECT.multiple).type(valor)
        cy.get(loc.CAMP_SELECT.multiple).type('{downArrow}')
        cy.get(loc.CAMP_SELECT.multiple).type('{enter}')
      })

      //7 - Checkbox
      cy.get(loc.CHECKBOX.cy).check() //Aqui ele apenas marca o checkbox
      cy.get(loc.CHECKBOX.appium).check().uncheck() //Aqui ele marca o checkbox e desmarca
      cy.get(loc.CHECKBOX.robot).check() //Aqui ele apenas marca o checkbox

      //8 - Selecionar aquivo - Não funciona
      //cy.get('#id_file').selectFile('test.cy.js')

      //Aqui ele clica no botão para enviar os dados
      cy.get(loc.CAMP_BOTAO.confirm).should('exist').and('be.visible')
      cy.get(loc.CAMP_BOTAO.confirm).click()

      //Aqui ele valida o conteúdo do box que aparece após apertar o botão, tem duas forma de validar o texto assim -- Olhar na doc se tem como fazer dessa forma ainda
      /*cy.get('.Toastify_toast-body > :nth-child(2)')
        //.should('exist')
        .and('be.visible')
      cy.get('.Toastify_toast-body > :nth-child(2)').should(
        'contain.text',
        'Dados enviados com sucesso.'
      )*/

      // Ou assim, porém aqui valida apenas o apenas do texto
      cy.contains(
        'Dados enviados com sucesso. Clique no botão RESETAR para reiniciar o formulário.'
      )

      //Aqui estamos validando se os campos estão bloqueados após enviar os dados
      cy.get(loc.CAMP_TXT.nome).should('be.disabled')
      cy.get(loc.CAMP_TXT.sobrenome).should('be.disabled')
      cy.get(loc.CAMP_TXT.email).should('be.disabled')
      cy.get(loc.CAMP_TXT.descricao).should('not.be.enabled')

      //cy.screenshot('Full Screen')

      //Aqui ele valida e clica no botão de Reset
      cy.get(loc.CAMP_BOTAO.reset).should('exist').and('be.visible')
      cy.get(loc.CAMP_BOTAO.reset).click()
    })
  })
})
