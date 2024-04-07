describe('User Registration', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('successfully registers a new user', () => {
    // Mock the successful API call to /register
    cy.intercept('POST', 'api/users/register', {
      statusCode: 201,
      body: {
        username: 'SteveCraft123',
        fullName: 'Steve Craft',
        email: 'SteveCraft@mail.com'
      },
    }).as('createUser');

    // Fill out and submit the form
    cy.get('#fullName').type('Steve Craft');
    cy.get('#username').type('SteveCraft123');
    cy.get('#email').type('SteveCraft@mail.com');
    cy.get('#password').type('password123');
    cy.get('form').submit();

    cy.contains('Congratulations!').should('exist');
    cy.url().should('include', '/login');
  });

  it('shows an error message on failure', () => {
    cy.intercept('POST', '/register', {
      statusCode: 500,
      body: {
        message: 'An error occurred',
      },
    }).as('createUserError');

    cy.get('form').submit();
    cy.contains('Sorry, not all fields are filled out correctly').should('exist');
  });
});
