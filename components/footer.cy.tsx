import React from 'react'
import Footer from './footer'

describe('<Footer />', () => {
  it('renders', () => {
    cy.mount(<Footer />);
    cy.get('div').should('be.visible');
    cy.get('div').should('contain.text', 'footer todo');
  })
})