// describe('To verify Angular and non Angular application test', () => {     
//     it('To verify page title of Lambdattest', 
//     () => {       
//     browser.ignoreSynchronization = true;    
//     browser.get("https://lambdatest.com");         
//     element(by.css('p.home-btn > a.home-cta')).click();         
//     expect(browser.getTitle()).toEqual('Signup - LambdaTest App | Free Cross Browser Testing Tool');     
//     }); 
//     });

const { element } = require("protractor");


    describe('To verify Login  in bank management system', () => {    
        
        
        beforeEach(() => {
            browser.get("http://localhost:4200/login"); 
          });
        it('To verify page title of Lambdattest', 
        () => {       
                    
        //element(by.css('p.home-btn > a.home-cta')).click();
        //element(by.element('uid')).sendKeys('sanando');  
        browser.element(by.id('name')).toEqual('Username:');     
        // expect(browser.element(by.element('name'))).toEqual('Username:');  
        
        // expect(page.usernameLabel.getText()).toEqual('Username');
        // expect(page.passwordLabel.getText()).toEqual('Password');
        // expect(page.signIn.getText()).toEqual('Sign in');
        }); 
        });

