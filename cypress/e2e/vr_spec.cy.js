/// <reference types="cypress" />

describe('Adicionar Cartões VR ao Carrinho', () => {
  it('Deve adicionar cartões do produto "Auto" ao carrinho com sucesso', () => {
    // Acessar a home do portal web
    cy.visit('/')

    // Navegar até a loja
    cy.contains('Compre online').click()

  })
})
