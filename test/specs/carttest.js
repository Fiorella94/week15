const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
describe ('CART page tests',  () => {    
    /*URLs to perform the test*/
    const urlLogin = 'https://www.saucedemo.com/';
    const urlInventory = 'https://www.saucedemo.com/inventory.html';
    const urlCart = 'https://www.saucedemo.com/cart.html';
    describe('Tests with standard user', () => {
        beforeAll('Login with standard user', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('standard_user', 'secret_sauce');
        });                          
        describe ('Tests performed from BACK-PACK item from the cart page', () => {
            beforeAll('From the inventory page add the item to the cart and access the cart', () =>{
                InventoryPage.addBackPackToCart.click();            
                InventoryPage.shoppingCartLink.click();            
            });         
            it('Check if the URL, item quantity and item info are correct', () => {
                expect(browser).toHaveUrl(urlCart);          
                expect(CartPage.cartQuantity).toHaveText("1");
                expect(CartPage.nameItemSelector(0)).toHaveText("Sauce Labs Backpack");
                expect(CartPage.descriptionItemSelector(0))
                .toHaveText("carry.allTheThings() with the sleek, streamlined Sly "+
                "Pack that melds uncompromising style with unequaled laptop and tablet protection.");
                expect(CartPage.priceItemSelector(0)).toHaveText("$29.99");
            });        
            it('From the cart page click CONTINUE SHOPPING', () => {
                CartPage.continueShopping.click();
                expect(browser).toHaveUrl(urlInventory);
                browser.pause(1000);
            });
            it('Remove item and check the quantity and cart counter ', () => {
                CartPage.removeBackPackFromCart.click();            
                expect(CartPage.cartItemsCounter).not.toBeDisplayed();            
                expect(CartPage.cartQuantity).not.toBeDisplayed();                      
            });
            it('Reset app state', () => {
                CartPage.burgerMenuOption(CartPage.resetAppStateBtn);            
                expect(CartPage.cartItemsCounter).not.toBeDisplayed();            
                expect(CartPage.cartQuantity).not.toBeDisplayed();
            });                 
        });
    });
});