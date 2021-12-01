///<reference types="cypress" />


import { locators } from "../Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { userdata } from "../Pages/userData"
import { links } from "../Pages/link"
import { result } from "lodash"

const call =new text()
let url=links.link1
let exlink=links.expectedlink
let exdboardlink=links.exdashboardlink


describe('Test',()=>
{
   afterEach(function(){
        if (this.currentTest.state === 'failed')
        {
        Cypress.runner.stop()
     }
      });
      it('QformsLogin', () =>
      {
        call.login();
        cy.screenshot();
       })
it('InvaLidCredentials',()=>{
      call.navigate(url);
      call.emailAddress();
      call.password();
      call.onSubmit();
      cy.url().should('include', exlink)
      call.errormessage()
      cy.log("log in failed")
   
})
    it('QformsLogindashboard', () =>{
      call.login();
      cy.screenshot();
      cy.url().should('include', exlink)
      cy.log("successfully logged in")
      cy.url().should('eq',exdboardlink )
      cy.get(locators.userdemo).should('have.text',userdata.checkuserdemo)
      cy.get(locators.navigation).should('be.visible')
      cy.get(locators.viewform).should('have.text',"View Forms List")
      cy.get(locators.createform).should('have.text',"Create Forms ")
      cy.get(locators.viewusrrole).should('have.text',"View User Role List ") 
      cy.get(locators.userlist).should('have.text',"View User List")
      cy.contains('Due Amount')
      cy.get(locators.userdemo).should('have.text',userdata.checkuserdemo).click()
      cy.get(locators.logout).click()
 })


     it('invalidPassword',()=>{
      call.navigate(url);
      call.validEmailAddress();

      let result1="result"
      let rpassword=call.generateString(8);
      
      cy.get(locators.password).type(rpassword)
      call.onSubmit();
      cy.url().should('include', exlink)
      call.errormessage()
      cy.log("log in failed")

     })  
     
     

 it('forgetPassword',()=>
     {
        call.navigate(url);
        cy.get('form.ng-untouched > div.custom-vertical-spacer > a').click()
        call.forgetpassword()
        cy.get(locators.sendemail).click()
        cy.get(locators.successtoast).should('have.text'," Success ")
        cy.contains('Please check your inbox')
     })
      it('form manager',()=>
      {
      call.login()
      cy.get(locators.viewform).click()
      cy.get(locators.formmanage).contains(' Form Manager ')
      cy.get(locators.backbutton).click()
      cy.get(locators.viewform).should('have.text',"View Forms List")
   })
      it('create form',()=>
      {
      call.login();
      cy.get(locators.createform).click()
      cy.get(locators.formbuilder).should('be.visible')
      cy.get(locators.uploadpf).should('be.visible')
      })
      it('viewuserrole',()=>
      {
      call.login()
      cy.get(locators.viewusrrole).click()
      cy.get(locators.rolelist).should('have.text'," Role List ")
      cy.get(locators.newrole).should('be.visible')
      })
      it('users',()=>
      {
       call.login()
       cy.get(locators.userlist).click()
       cy.get(locators.createnewuser).should('be.visible')
       cy.get(locators.userlistlabel).invoke('text').then((labeluser)=>{
       expect(labeluser.trim()).to.equal("User List")
            })
         })
      it('billingninvoice',()=>
      {
       call.login()
       cy.get(':nth-child(5) > .panel > .panel-heading').click()
       cy.get('.mat-sort-header-button').invoke('text').then((textOfElement)=>{
       expect(textOfElement.trim()).to.equal("CLIENT ID")
          })
      })
})
