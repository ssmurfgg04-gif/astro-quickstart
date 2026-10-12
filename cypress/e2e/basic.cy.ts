describe('waitlist page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the hero headline', () => {
    cy.get('h1.display').contains('Join the');
  })

  it('renders the waitlist form', () => {
    cy.get('form[name="waitlist"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('button[type="submit"]').should('be.visible');
  })
})
