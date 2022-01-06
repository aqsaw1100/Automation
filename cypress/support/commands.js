// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
Cypress.Commands.add('createform', (buttonLabel) => {
    cy.get(':nth-child(2) > .panel > .color-dark > .panel-footer > .pull-left').click()
    cy.get('[routerlink="/qforms/form-builder/0"] > div').click()//form builder
    cy.get('.toggle-entry-add > .mat-button-wrapper > .material-icons').click()//plus icon
  })

