describe('Login spec', () => {
  it('visit the login page', () => {
    //Arrange

    //Act
    cy.visit('/');

    //Assert
  });

  it('should name input has the focus when it clicks on it', () => {
    //Arrange

    //Act
    cy.visit('/');
    cy.findByRole('textbox').click();

    //Assert
    cy.findByRole('textbox').should('have.focus');
  });

  it('should show an alert with a message when the password is incorrect', () => {
    //Arrange
    const user = 'admin';
    const password = 'hello';
    //Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    //Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  });

  it('feeding with correct values of user and password should navigate to the next page', () => {
    //Arrange
    const user = 'admin';
    const password = 'test';
    //Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    //Assert
    cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
  });
});
