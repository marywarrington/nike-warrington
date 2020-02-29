context('Slide', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('Slide - is visible', () => {
    cy.get('.slide').should('be.visible')
  })

  it('Slide - contains css background-size: cover', () => {
    cy.get('.slide').should('have.css', 'background-size', 'cover')
  })

  it('Slide - Image description is not empty', () => {
    cy.get('.slide__desc').should('not.be.empty')
  })

})