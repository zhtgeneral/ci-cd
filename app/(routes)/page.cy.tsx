import React from 'react'
import HomePage from './page'

describe('<HomePage /> is visible', () => {
  it('renders', () => {
    cy.mount(<HomePage />)
    cy.get('div').should('be.visible');
  })
})