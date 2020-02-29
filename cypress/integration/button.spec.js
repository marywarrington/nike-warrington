context('Button', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('Button - contains correct class', () => {
      cy.contains('Download').should('have.class', 'button--light');
  })

  it('Button - clicking submit putton passes new input value to app state', () => {
    cy.get('.query-input input').clear().type('running')
    cy.get('.query-input .button').click()
    cy.get('.current-search').should('contain', 'Image results for search term "running":' )
  })

})