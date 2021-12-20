/* global cy, before */

describe('Test BI app', () => {
  const backendApi = 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com';
  before(() => {
    cy.visit('/');
  });

  it('should display the Scan QR Code button, and click the button', () => {
    cy.wait(500);
    const startButton = cy.get('button').should('have.text', 'Scan QR Code');
    startButton.click();
  });

  it('should display the QR Code component, and select the Scan an Image File mode', () => {
    cy.wait(500);
    cy.get('#reader__dashboard_section_swaplink')
      .should('have.text', 'Scan an Image File')
      .click();
  });

  it('should display simulate camera QR code selector input view, and select a QR code png file to simulate camera scan QR code image', () => {
    cy.wait(500);
    cy.get('#reader__filescan_input').attachFile('QRCode.png');
  });

  it('should make the takePhoto button disabled ', () => {
    cy.wait(500);
    cy.get('[data-testid="takePhoto"]').should('be.disabled');
    cy.get('[data-testid="status"]').should('have.text', 'Status: unknown');
  });
  it('should make checkServerStatusAPI response ok, after check server status ', () => {
    cy.wait(500);
    cy.intercept({
      url: `${backendApi}/api/v1.0/status`,
    }).as('checkServerStatusAPI');
    cy.get('[data-testid="checkServerStatusButton"]').click();
    cy.wait('@checkServerStatusAPI').should(xhr => {
      expect(xhr.response.body).to.deep.equal({ status: 'ok' });
    });
  });

  it('should make the takePhoto button enable, after check server status ', () => {
    cy.get('[data-testid="status"]').should('have.text', 'Status: ok');
    cy.get('[data-testid="takePhoto"]').should('not.be.disabled');
  });

  it('should allow upload the picture to the server, and ranking api response ok - saved', () => {
    cy.get('[data-testid="takePhoto"]').click();
    cy.intercept({
      url: `${backendApi}/api/v1.0/ranking`,
    }).as('ranking');

    cy.get('[data-testid="imageUploader"]').attachFile('Logo.png');
    cy.wait('@ranking').should(xhr => {
      const filename = xhr.response.body.file;
      expect(JSON.stringify(xhr.response.body)).to.contain(JSON.stringify('ok - saved'));
      cy.url().should('contain', filename);
    });
  });
});
