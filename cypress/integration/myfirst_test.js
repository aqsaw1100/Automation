///<reference types="cypress" />


import { elements } from "../Pages/locators"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "../Pages/userData"


const call =new text()
let link='https://test.qforms.co'
let expectedlink='https://test.qforms.co/#/login'
let exdashboardlink='https://test.qforms.co/#/dashboard'

describe('Test',()=>{
 it('QformsLogin', () =>{

         call.navigate(link);
        
         call.emailAddress();
         
         call.password();
         
         call.onSubmit();
         cy.screenshot();

        cy.url().should('include', link)
        
       call.errormessage()
       

 })
    it('QformsLogindashboard', () =>{

      call.navigate(link);
     
      call.validEmailAddress();
      
      call.password();
      
      call.onSubmit();
      cy.screenshot();

     cy.url().should('include', expectedlink)
     cy.log("successfully logged in")
     //cy.wait(3000);
     cy.url().should('eq',exdashboardlink )
     cy.get(elements.userdemo).should('have.text',info.checkuserdemo)
    //cy.get('#app-navbar-collapse').should('be.visible')
     //cy.get(':nth-child(1) > .panel > .bold > .panel-footer > .pull-left').should('have.text',"View Forms List")
     cy.get(elements.navigation).should('be.visible')
     cy.get(elements.viewform).should('have.text',"View Forms List")
     cy.get(elements.createform).should('have.text',"Create Forms ")
     cy.get(elements.viewusrrole).should('have.text',"View User Role List ") 
     cy.get(elements.userlist).should('have.text',"View User List")
     //cy.get(elements.billing).should('have.text',"Due Amount : ₹0.00 ")
     cy.contains('Due Amount')
     cy.get(elements.userdemo).should('have.text',info.checkuserdemo).click()
     cy.get(elements.logout).click()
 })
     it('forgetPassword',()=>
     {
        call.navigate(link);
        cy.get('form.ng-untouched > div.custom-vertical-spacer > a').click()
        call.forgetpassword()
        cy.get(elements.sendemail).click()
        cy.get('.toast-title').should('have.text'," Success ")
        cy.contains('Please check your inbox')
        

     })
})
