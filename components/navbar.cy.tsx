import NavBar from './navbar'
import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

describe('<NavBar />', () => {
  it('renders', () => {
    const router: AppRouterInstance = { 
      push: cy.spy().as('push'),
      replace: cy.spy().as('replace'),
      back: cy.spy().as('back'),
      prefetch: cy.stub().as('prefetch').resolves(),
      forward: cy.spy().as('forward'),
      refresh: cy.spy().as('refresh')
    }

    cy.mount(
      <AppRouterContext.Provider value={router}> 
        <NavBar />
      </AppRouterContext.Provider>
    ).then(() => {
      cy.get('div').should('be.visible');
      cy.get('div').should('contain.text', 'navbar todo');
    })
  })
})