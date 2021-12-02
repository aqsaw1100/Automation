///<reference types="cypress" />


import { locators } from "../Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { userdata } from "../Pages/userData"
import { links } from "../Pages/link"
import { result } from "lodash"
import {labels} from"../Pages/label"

const call =new text()
let url=links.link1
let exlink=links.expectedlink
let exdboardlink=links.exdashboardlink


describe('Test',()=>   //testsuite
{
   afterEach(function(){
      if (this.currentTest.state === 'failed')
        {
        Cypress.runner.stop()
        }
      });
      
it('InvaLidEmail',()=>{                     //randomly generated email is given thus incorrect email id
      call.navigate(url);                        //navigating q forms URL
      call.remailAddress();                     //calling function which generates random email address 
      call.password();                          //correct password
      call.onSubmit();
      cy.url().should('include', exlink)       //asserting url as it will still contain url where we enter credentials 
      call.errormessage()                      //capturing error message which we get once we try to log in using invalid password/email
      cy.log("log in failed")
      cy.log("log in failed")                  //we are giving message that our test case has passed as our log in is failed
      cy.screenshot()
})
    it('QformsLogindashboard', () =>{         //will land on dashboard once logged in
      call.login();
      cy.url().should('include', exlink)      
      cy.log("successfully logged in")
      cy.url().should('eq',exdboardlink )      //asserting whether we are on dashboard
      cy.get(locators.userdemo).should('have.text',userdata.checkuserdemo)   //does it have specific account name
      cy.screenshot()
      cy.get(locators.navigation).should('be.visible')                      //whether navigation bar is there
      cy.get(locators.viewform).should('have.text',labels.viewformslist)    //checking label "view form" is there or not
      cy.screenshot()
      cy.get(locators.createform).invoke('text').then((labelcreateform)=>{   //assert label "create form" whether its there or not
         expect(labelcreateform.trim()).to.equal("Create Forms")
      })
      cy.screenshot()
      cy.get(locators.viewusrrole).invoke('text').then((labelviewurole)=>{  //assert label "view user role list"
         expect(labelviewurole.trim()).to.equal("View User Role List")
      })
      cy.screenshot()
      cy.contains(labels.dueamount)                                             //checking label due amount is there or not
      cy.get(locators.userdemo).should('have.text',userdata.checkuserdemo).click() //looking for userdemo and click on it
      cy.screenshot()
      cy.get(locators.logout).click()                                            //logging out
      
   })   

     it('invalidPassword',()=>{                                           //typing invalid password
      call.navigate(url);
      call.validEmailAddress();
      let result1="result"
      let rpassword=call.generateString(8);                               //calling function in which we are randomly generating password
      cy.get(locators.password).type(rpassword)
      call.onSubmit();
      cy.url().should('include', exlink)
      call.errormessage()                                              //capturing error message which we get once we try to log in using invalid password/email
      cy.log("log in failed")                                          //message
      cy.screenshot()
   })  
     
      it('form manager',()=>
      {
      call.login()
      cy.get(locators.viewform).click()                                  //locating viewform on page and clicking on it
      cy.get(locators.formmanage).contains(' Form Manager ')             //whether form manager is written
      cy.screenshot()
      cy.get(locators.backbutton).click()                                //clicking back button
      cy.get(locators.viewform).should('have.text',"View Forms List")   //checking label
   })
      it('create form',()=>
      {
      call.login();
      cy.get(locators.createform).click()                            //locating create form on page and clicking on it
      cy.get(locators.formbuilder).should('be.visible')
      cy.screenshot()
      cy.get(locators.uploadpf).should('be.visible')
      cy.screenshot()
   })
      it('viewuserrole',()=>
      {
      call.login()
      cy.get(locators.viewusrrole).click()
      cy.get(locators.rolelist).should('have.text'," Role List ")
      cy.screenshot()
      cy.get(locators.newrole).should('be.visible')             //checking label new role
      cy.screenshot()
   })
      it('users',()=>
      {
       call.login()
       cy.get(locators.userlist).click()
       cy.get(locators.createnewuser).should('be.visible')
       cy.get(locators.userlistlabel).invoke('text').then((labeluser)=>{
       expect(labeluser.trim()).to.equal("User List")                   //checking label user list
            })
            cy.screenshot()
         })
      it('billingninvoice',()=>
      {
       call.login()
       cy.get(locators.billing).click()
       cy.get(locators.clientid).invoke('text').then((textOfElement)=>{
       expect(textOfElement.trim()).to.equal("CLIENT ID")                //checking label client id
       cy.screenshot()
          })
      })
   })
