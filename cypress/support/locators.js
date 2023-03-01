const locators = {
  CAMP_TXT: {
    nome: '[id^="id_campo_nome"]',
    sobrenome: '#id_campo_sobrenome',
    email: '[id^="id_campo_email"]',
    descricao: '[id^="id_campo_descricao"]'
  },

  CAMP_RADIO: {
    linkedin: '[id^="id_Linkedin"]'
  },

  CAMP_SELECT: {
    simples: '[id^="id_campo_linguagemProgramacaoSimples"]',
    avance: '#mui-component-select-linguagemProgramacao',
    multiple: 'input[aria-invalid^="false"][name^="multiplaSelecao"]'
  },

  CHECKBOX: {
    cy: '#id_checkbox_cypress',
    appium: '#id_checkbox_appium',
    robot: '#id_checkbox_robotFramework'
  },

  CAMP_BOTAO: {
    confirm: '[data-testid="btn_confirm"] > .MuiButton-label',
    reset: '[data-testid="btn_reset"] > .MuiButton-label'
  }
}

export default locators
