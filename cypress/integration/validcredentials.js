///<reference types="cypress" />


import { locators } from "../Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "../Pages/userData"
import { links } from "../Pages/link"




const call =new text()

let link='https://test.qforms.co'

let expectedlink='https://test.qforms.co/#/login'

let exdashboardlink='https://test.qforms.co/#/dashboard'



describe('Test',()=>{

       it('QformsLogin', () =>{
       call.login();
       cy.screenshot();
       cy.url().should('include', link)

       })
    })