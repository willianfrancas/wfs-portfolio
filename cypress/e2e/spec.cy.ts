beforeEach(() => {
  cy.visit('http://localhost:4200/')
});

describe('Website is On', () => {
  it('Visits the initial project page', () => {
    cy.get('.hero-container > h1').should('contain', 'William F. Silva');
  });
});

describe('Count elements', () => {
  it('should contain 6 items on menu', () => {
    const itemsArray = ['Home', 'About', 'Skills', 'License & Certified', 'Resume', 'Contact'];
    cy.get('#navbar ul li a i~span').then(content => {
      cy.wrap(content).should('have.length', 6);
      for (let i = 0; i < content.length; i++) {
        const element = content[i];
        cy.wrap(element).should('contain.text', itemsArray[i]);
      }
    });
  });
});

