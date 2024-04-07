describe('User Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('successfully logs in a user', () => {
    cy.intercept('POST', '/api/users/login', {
      statusCode: 200,
      body: "User authenticated successfully",
    }).as('loginUser');

    // Mock localStorage and sessionStorage to simulate the app's behavior after a successful login
    cy.window().then((win) => {
      cy.stub(win.localStorage, 'getItem').callsFake((key) => {
        if (key === 'refreshToken') return 'mockRefreshToken';
      });
      cy.stub(win.sessionStorage, 'getItem').callsFake((key) => {
        if (key === 'accessToken') return 'mockAccessToken';
      });
    });

    // Fill out and submit the login form
    cy.get('#username').type('testUser');
    cy.get('#password').type('password');
    cy.get('form').submit();

    // Verify the redirection to the homepage
    cy.url().should('include', '/');
  });

  it('shows an error message on login failure due to incorrect credentials', () => {
    // Mock the API call to simulate a failed login attempt
    cy.intercept('POST', '/api/users/login', {
      statusCode: 401,
      body: "Invalid credentials",
    }).as('loginFail');

    // Fill out and submit the login form with incorrect credentials
    cy.get('#username').type('wrongUser');
    cy.get('#password').type('wrongPassword');
    cy.get('form').submit();

    // Check for error message
    cy.contains('Wrong username or password.').should('exist');
  });
});
