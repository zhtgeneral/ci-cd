describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  afterEach(() => {
    cy.visit('/');
  })

  it('button takes us to other page', () => {
    cy.contains('navbar todo').click();
    cy.url().should('contain', '/other');
  })
})