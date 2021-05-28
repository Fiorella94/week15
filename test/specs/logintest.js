const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const { url } = require('inspector');
describe (
    'login section with two input fields, one login button, three hidden close buttons'+
    ', a credentials field and two images(one as a logo and one as a src image',  () => {    
    /*URLs to perform the test*/
    const urlLogin = 'https://www.saucedemo.com/';
    const urlInventory ='https://www.saucedemo.com/inventory.html';
    const urlDogImg = 'https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg'    
    beforeAll('Open browser on the tested page', () => {
        browser.url(urlLogin);
    }); 
    describe ('user name field testing', () => {
        it('empty username', () => {            
            LoginPage.setUserName();
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMessageContainer).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Username is required"); 
            browser.pause(1000);                                
        });
        it('wrong username' , () => {
            LoginPage.setUserName('mike_smith');
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMessageContainer).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface:Password is requiered");
            browser.pause(1000);
        });
    describe('password field testing' , () => {
        it('empty password' , () => {
            LoginPage.setPassword('');
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMessageContainer).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Password is required");
            browser.pause(1000);
        }) ;
        it('undefined password', () => {            
            LoginPage.setPassword(undefined);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorMessageContainer).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Password is required");
            browser.pause(1000);            
        }); 
    });
    describe ('usernames and password testing', () => {
        beforeAll('clean browser', () => {
            browser.refresh();
        });   
        it('empty username and emty password' , () => {
            LoginPage.testLogin('', '');
            LoginPage.loginBtn.click();
            expect(LoginPage.wrongUserInput).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Username is required");
            browser.url(urlLogin);
        });   
        it('valid username and empty password' , () => {
            LoginPage.testLogin('standard_user' , '');
            LoginPage.loginBtn.click();
            expect(LoginPage.wrongUserInput).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Password is required");
            browser.url(urlLogin);
        });
        it('valid username and wrong password' , () => {
            LoginPage.testLogin('standard_user' , '12345');
            LoginPage.loginBtn.click();
            expect(Llogin.wrongUserInput).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Username and password do not match any user in this service");
            browser.url(urlLogin);
        });
        it('invalid username and invalid password', () => {            
            LoginPage.testLogin('user1', '12345');
            LoginPage.loginBtn.click();
            expect(LoginPage.wrongUserInput).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText(
                "Epic sadface: Username and password do not match any user in this service");
            });
         it('locked user with correct password we stay on the'+
            'login page and get an error message', () => {            
            LoginPage.testLogin('locked_out_user', 'secret_sauce');
            LoginPage.loginBtn.click();
            expect(LoginPage.wrongUserInput).toBeDisplayed();
            expect(LoginPage.errorMessageContainer)
            .toHaveText("Epic sadface: Sorry, this user has been locked out.");                                  
        });
        it('standar  username and password, loads the next url all'+
        ' the pictures are not the dog ones', () => {            
            LoginPage.testLogin('standard_user', 'secret_sauce');
            expect(LoginPage.wrongUserInput).not.toBeDisplayed();           
            expect(browser).toHaveUrl(urlInventory);            
            browser.url(urlLogin);                
        }); 
        it('problematic username and password, loads the next url all'+
        ' the pictures are  dog ones', () => {                        
            LoginPage.testLogin('problem_user', 'secret_sauce');
            expect(LoginPage.wrongUserInput).not.toBeDisplayed();
            expect(browser).toHaveUrl(urlInventory);
            expect(InventoryPage.igmItemSelector(1).getAttribute('src')).toBe(urlDogImg);
            browser.url(urlLogin);                         
        });
        it('performance glitch user out username and password, loads the next url all'+
        ' the pictures are not the dog ones but it takes a long time to do it', () => {            
            LoginPage.testLogin('performance_glitch_user', 'secret_sauce');
            expect(LoginPage.wrongUserInput).not.toBeDisplayed();        
            browser.setTimeout({
                'pageLoad': 5000,
            });
            expect(browser).toHaveUrl(urlInventory);
            browser.url(urlLogin);               
        });
    });   
});

        

