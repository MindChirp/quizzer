describe('Profile Page Tests', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      //Prevent auth guard
      win.localStorage.setItem('username', 'fakeUser');
      win.localStorage.setItem('refreshToken', 'fakeRefreshToken');
    });

    cy.intercept('GET', '/api/users/fakeUser', {
      statusCode: 200,
      body: {
        username: "fakeUser",
        fullName: "Fake User",
        email: "fakeuser@example.com"
      },
    }).as('getUserProfile');

    cy.visit('/profile');
  });

  it('displays the correct user information', () => {
    cy.wait('@getUserProfile');

    cy.get('.profile').should('contain', 'fakeUser')
      .and('contain', 'Fake User')
      .and('contain', 'fakeuser@example.com');
  });
});
