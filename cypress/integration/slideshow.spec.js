context('Slideshow', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('Slideshow - is visible', () => {
    cy.get('.carousel').should('be.visible')
  })

  it('Slideshow - contains slidetrack container', () => {
    cy.get('.carousel').children('.BrainhubCarousel__trackContainer')
  })

  it('Slideshow - contains slide track', () => {
    cy.get('.BrainhubCarousel__trackContainer').children('.BrainhubCarousel__track')
  })

  it('Slideshow - contains slides', () => {
    cy.get('.BrainhubCarousel__track').children('.BrainhubCarouselItem')
  })
})