describe('Test upload package', () => {
  it('', () => {
    cy.visit('https://www.browserling.com/tools/image-to-base64');
    cy.get('[id="file-select"]').attachFile({ filePath: 'instaa.jpeg' });
    cy.get('[id="submit"]').click();
    cy.get('[id="image-to-base64-text"]').should('be.visible');
  });
});
