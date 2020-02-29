context('API', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('Accesses image data via Unsplash', () => {
    cy.request('GET', 'https://api.unsplash.com/photos/random?count=10&query=nike&client_id=5rFSbHQe9VqXHk9zAYEpj_vZLe0IEVA7Ny22ShkaOJQ').then(({ status, body: data }) => {
      expect(status).to.equal(200);
      assert.isAbove(
        data.length,
        0,
        'More than 0 images are returned',
      );
    });
  });
});
