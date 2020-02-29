context('Query Input', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('Query Input - .clear() - clear the input', () => {
    cy.get('.query-input input').clear().should('have.value', '')
  })

  it('Query Input - type new value in form', () => {
    cy.get('.query-input input').clear().type('flowers').should('have.value', 'flowers')
  })

  it('Query Input - pass new input value to app state', () => {
    cy.get('.query-input input').clear().type('flowers')
    cy.get('.query-input .button').click()
    cy.get('.current-search').should('contain', 'Image results for search term "flowers":' )
  })

})