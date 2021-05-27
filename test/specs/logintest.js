const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
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
    
