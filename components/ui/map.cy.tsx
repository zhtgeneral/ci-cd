import React from 'react'
import Map from './map'

describe('<Map />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Map />)
  })
})