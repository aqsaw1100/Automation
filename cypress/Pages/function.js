import {info} from './userData'
import { elements } from './locators';
//import { should } from 'chai';

export class text{

    
    
    navigate(url){
        cy.visit(url)
       // cy.get(':nth-child(7) > .mat-button-wrapper').click();
        cy.wait(3000);
    }
    
    enterFirstName(){
        let firstName=info.fname;
        let fsel=elements.fNameSel;
        cy.get(fsel).type(firstName,{force:true})

    }
    login(){

        let url1='https://test.qforms.co'
        this.navigate(url1)
        this.validEmailAddress()
        this.password()
        this.onSubmit()
       }
    enterLastName(){
        let lastName=info.lName;
        let lsel=elements.lNameSel;
        cy.get(lsel).type(lastName+this.generateString(5),{force:true})

    }
    enterStreetAddress(){
        let add=info.address;
        let location=elements.address;
        cy.get(location).type(add)

    }
   
   zipCode(){
    let code=info.pincode;
    let zcode=elements.addCode;

        cy.get(zcode).type(code+'{enter}')

    }
   phoneNumber(){
    let call=info.number;
    let phNo=elements.num;

        cy.get(phNo).type(call+Math.floor(Math.random()*100))

    }
    randomemailAddress(){
    let msg=info.mail;
    let msgMail=elements.email;

        cy.get(msgMail).type(msg+Math.floor(Math.random()*100)+'@mail.com')
    
    }
    invalidpassword(){
        
    }
    validEmailAddress(){
        let email=info.validemail;
        let msgMail=elements.email;
        cy.get(msgMail).type(email)
    }
    forgetpassword(){
        let forgetemail=info.femail;
        let forgetpasswordlocator =elements.forgetpswd;
        cy.get(forgetpasswordlocator).type(forgetemail);
    }
    password(){
        let pswd=elements.password;
        let pswdvalue=info.password;
        cy.get(pswd).type(pswdvalue)
    }
   errormessage(){
        let erormsg=elements.errormessage;
        let erormsgvalue=info.errormessage;
        cy.get(erormsg).contains(erormsgvalue)
    }
    
    refferedBy(){
    let details=info.ref;
        let refText=elements.ref;
        cy.get(refText).type(details)

    }
    onSubmit(){
    let LogIn=elements.login;
    cy.get(LogIn).click();
        
    }
    generateString(length) {
        //let pswd=elements.password;
        //let invalid=result;
        // let val=cy.get(elements.password)
        // val.type(result)
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
        
        
    }
}