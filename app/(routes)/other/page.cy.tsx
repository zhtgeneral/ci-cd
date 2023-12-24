import React from 'react'
import OtherPage from './page'

describe('<OtherPage />', () => {
  it('renders', () => {
    cy.mount(<OtherPage />)
    cy.get('div').should('be.visible');
  })
})