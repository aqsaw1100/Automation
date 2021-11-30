///<reference types="cypress" />


import { elements } from "../Pages/locators"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "../Pages/userData"
import { links } from "d:/cypressQformautomation/cypress/Pages/routes"

const call =new text()
let url=links.link1
let exlink=links.expectedlink
let exdboardlink=links.exdashboardlink


describe('Test',()=>{
   afterEach(function() {

      if (this.currentTest.state === 'failed') {

        Cypress.runner.stop()

      }

    });
 it.only('QformsLogin', () =>{
        call.login();
      //   call.navigate(url);
      //    call.emailAddress();
      //    call.password();
      //    call.onSubmit();
         cy.screenshot();
         //cy.url().should('include', exlink)
         // call.errormessage()
         // cy.log("log in failed")
       

 })
    it('QformsLogindashboard', () =>{
      call.navigate(url);
      call.validEmailAddress();
      call.password();
      call.onSubmit();
      cy.screenshot();

     cy.url().should('include', exlink)
     cy.log("successfully logged in")
     cy.url().should('eq',exdboardlink )
     cy.get(elements.userdemo).should('have.text',info.checkuserdemo)
     cy.get(elements.navigation).should('be.visible')
     cy.get(elements.viewform).should('have.text',"View Forms List")
     cy.get(elements.createform).should('have.text',"Create Forms ")
     cy.get(elements.viewusrrole).should('have.text',"View User Role List ") 
     cy.get(elements.userlist).should('have.text',"View User List")
     cy.contains('Due Amount')
     cy.get(elements.userdemo).should('have.text',info.checkuserdemo).click()
     cy.get(elements.logout).click()
 })
     it('forgetPassword',()=>
     {
        call.navigate(url);
        cy.get('form.ng-untouched > div.custom-vertical-spacer > a').click()
        call.forgetpassword()
        cy.get(elements.sendemail).click()
        cy.get(elements.successtoast).should('have.text'," Success ")
        cy.contains('Please check your inbox')
     })
      it('form manager',()=>
      {
      call.navigate(url);
      call.validEmailAddress();
      call.password();
      call.onSubmit();
      cy.get(elements.viewform).click()
      cy.get(elements.formmanage).contains(' Form Manager ')
      cy.get(elements.backbutton).click()
      cy.get(elements.viewform).should('have.text',"View Forms List")
   })
      it('create form',()=>
      {
      call.navigate(url);
      call.validEmailAddress();
      call.password();
      call.onSubmit();
      cy.get(elements.createform).click()
      cy.get(elements.formbuilder).should('be.visible')
      cy.get(elements.uploadpf).should('be.visible')
      })
      it('viewuserrole',()=>
      {
      call.navigate(url);
      call.validEmailAddress(); 
      call.password();
      call.onSubmit();
      cy.get(elements.viewusrrole).click()
      cy.get('[fxflex="20"]').should('have.text'," Role List ")
      cy.get('#button_add_user').should('be.visible')
      })

})
