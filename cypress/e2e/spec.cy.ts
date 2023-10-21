describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200/')
    cy.get('.hero-container > h1').should('contain', 'William F. Silva');
  })
})
