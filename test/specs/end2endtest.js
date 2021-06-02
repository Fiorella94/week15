const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
describe('COMPLETE test from login to checkout complete for all items', () =>{
    /*URLs to perform the test*/
    const urlLogin = 'https://www.saucedemo.com/';
    const urlInventory = 'https://www.saucedemo.com/inventory.html';
    const urlCart = 'https://www.saucedemo.com/cart.html';
    const urlCheckout = 'https://www.saucedemo.com/checkout-step-one.html';  
    const urlCheckoutTwo = 'https://www.saucedemo.com/checkout-step-two.html';
    const urlCheckoutComplete = 'https://www.saucedemo.com/checkout-complete.html'; 
    //ITEMS
    const itemUrlFour = 'https://www.saucedemo.com/inventory-item.html?id=4';
    describe('STANDAR USER BACKPACK item', () =>{
        beforeAll('Login with standar user', () =>{
            browser.url(urlLogin);
            LoginPage.testLogin('standard_user', 'secret_sauce');
        });
        it('E2E not clicking on the individual item', () =>{
            InventoryPage.addBackPackToCart.click();
            InventoryPage.shoppingCartLink.click();
            expect(browser).toHaveUrl(urlCart);
            expect(CartPage.cartQuantity).toHaveText("1");
            expect(CartPage.nameItemSelector(0)).toHaveText("Sauce Labs Backpack");
            expect(CartPage.descriptionItemSelector(0))
            .toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that"+
            " melds uncompromising style with unequaled laptop and tablet protection.");
            expect(CartPage.priceItemSelector(0)).toHaveText("$29.99");
            CartPage.checkOutBtn.click();
            expect(browser).toHaveUrl(urlCheckout);
            CheckoutPage.testCheckoutForm('Fiorella', 'Salas', '1994');
            expect(browser).toHaveUrl(urlCheckoutTwo);
            expect(CheckoutPage.nameItemSelector(0)).toHaveText("Sauce Labs Backpack");
            expect(CheckoutPage.descriptionItemSelector(0))
            .toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack "+
            "that melds uncompromising style with unequaled laptop and tablet protection.");
            expect(CheckoutPage.priceItemSelector(0)).toHaveText("$29.99");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            expect(CheckoutPage.sumaryInfoLevelPaymentInformation)
            .toHaveText("Payment Information:");
            expect(CheckoutPage.sumaryInfoLevelPaymentValue)
            .toHaveText("SauceCard #31337");
            expect(CheckoutPage.sumaryInfoLevelShippingInformation)
            .toHaveText("Shipping Information:");
            expect(CheckoutPage.sumaryInfoLevelShippingValue)
            .toHaveText("FREE PONY EXPRESS DELIVERY!");
            expect(CheckoutPage.sumarySubTotal).toHaveText("Item total: $29.99");
            expect(CheckoutPage.sumaryTax).toHaveText("Tax: $2.40");
            expect(CheckoutPage.sumaryTotal).toHaveText("Total: $32.39");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            CheckoutPage.finishBtn.click();
            expect(browser).toHaveUrl(urlCheckoutComplete);
            CheckoutPage.backHome.click();            
            expect(browser).toHaveUrl(urlInventory);
            expect(InventoryPage.removeBackPackFromCart).not.toBeDisplayed();
            expect(InventoryPage.cartItemsCounter).not.toBeDisplayed();
        });
        it('E2E  clicking on the individual item prior accessing the CART', () =>{
            InventoryPage.addBackPackToCart.click();
            InventoryPage.nameItemSelector(0).click();
            expect(browser).toHaveUrl(itemUrlFour);
            InventoryPage.shoppingCartLink.click();
            expect(browser).toHaveUrl(urlCart);
            expect(CartPage.cartQuantity).toHaveText("1");
            expect(CartPage.nameItemSelector(0)).toHaveText("Sauce Labs Backpack");
            expect(CartPage.descriptionItemSelector(0))
            .toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that"+
            " melds uncompromising style with unequaled laptop and tablet protection.");
            expect(CartPage.priceItemSelector(0)).toHaveText("$29.99");
            CartPage.checkOutBtn.click();
            expect(browser).toHaveUrl(urlCheckout);
            CheckoutPage.testCheckoutForm('Fiorella', 'Salas', '1994');
            expect(browser).toHaveUrl(urlCheckoutTwo);
            expect(CheckoutPage.nameItemSelector(0)).toHaveText("Sauce Labs Backpack");
            expect(CheckoutPage.descriptionItemSelector(0))
            .toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack "+
            "that melds uncompromising style with unequaled laptop and tablet protection.");
            expect(CheckoutPage.priceItemSelector(0)).toHaveText("$29.99");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            expect(CheckoutPage.sumaryInfoLevelPaymentInformation)
            .toHaveText("Payment Information:");
            expect(CheckoutPage.sumaryInfoLevelPaymentValue)
            .toHaveText("SauceCard #31337");
            expect(CheckoutPage.sumaryInfoLevelShippingInformation)
            .toHaveText("Shipping Information:");
            expect(CheckoutPage.sumaryInfoLevelShippingValue)
            .toHaveText("FREE PONY EXPRESS DELIVERY!");
            expect(CheckoutPage.sumarySubTotal).toHaveText("Item total: $29.99");
            expect(CheckoutPage.sumaryTax).toHaveText("Tax: $2.40");
            expect(CheckoutPage.sumaryTotal).toHaveText("Total: $32.39");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            CheckoutPage.finishBtn.click();
            expect(browser).toHaveUrl(urlCheckoutComplete);
            CheckoutPage.backHome.click();            
            expect(browser).toHaveUrl(urlInventory);
            expect(InventoryPage.removeBackPackFromCart).not.toBeDisplayed();
            expect(InventoryPage.cartItemsCounter).not.toBeDisplayed();
        });  
    });
    const itemUrlZero = 'https://www.saucedemo.com/inventory-item.html?id=0'
    describe('STANDAR USER Bike light item', () =>{
        beforeAll('Login with standar user', () =>{
            browser.url(urlLogin);
            LoginPage.testLogin('standard_user', 'secret_sauce');
        });
        it('E2E not clicking on the individual item', () =>{
            InventoryPage.addLabLightToCart.click();
            InventoryPage.shoppingCartLink.click();
            expect(browser).toHaveUrl(urlCart);
            expect(CartPage.cartQuantity).toHaveText("1");
            expect(CartPage.nameItemSelector(0)).toHaveText("Sauce Labs Bike Light");
            expect(CartPage.descriptionItemSelector(0))
            .toHaveText("A red light isn't the desired state in testing but it sure "
            +"helps when riding your bike at night. Water-resistant"
            +" with 3 lighting modes, 1 AAA battery included.");
            CartPage.checkOutBtn.click();
            expect(browser).toHaveUrl(urlCheckout);
            CheckoutPage.testCheckoutForm('Fiorella ', 'Salas', '2211');
            expect(browser).toHaveUrl(urlCheckoutTwo);
            expect(CheckoutPage.nameItemSelector(0)).toHaveText("Sauce Labs Bike Light");
            expect(CheckoutPage.descriptionItemSelector(0))
            .toHaveText("A red light isn't the desired state in testing but it sure "
            +"helps when riding your bike at night. Water-resistant"
            +" with 3 lighting modes, 1 AAA battery included.");
            expect(CheckoutPage.priceItemSelector(0)).toHaveText("$9.99");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            expect(CheckoutPage.sumaryInfoLevelPaymentInformation)
            .toHaveText("Payment Information:");
            expect(CheckoutPage.sumaryInfoLevelPaymentValue)
            .toHaveText("SauceCard #31337");
            expect(CheckoutPage.sumaryInfoLevelShippingInformation)
            .toHaveText("Shipping Information:");
            expect(CheckoutPage.sumaryInfoLevelShippingValue)
            .toHaveText("FREE PONY EXPRESS DELIVERY!");
            expect(CheckoutPage.sumarySubTotal).toHaveText("Item total: $9.99");
            expect(CheckoutPage.sumaryTax).toHaveText("Tax: $0.80");
            expect(CheckoutPage.sumaryTotal).toHaveText("Total: $10.79");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            CheckoutPage.finishBtn.click();
            expect(browser).toHaveUrl(urlCheckoutComplete);
            CheckoutPage.backHome.click();            
            expect(browser).toHaveUrl(urlInventory);
            expect(InventoryPage.removeBackPackFromCart).not.toBeDisplayed();
            expect(InventoryPage.cartItemsCounter).not.toBeDisplayed();
        });
        it('E2E  clicking on the individual item prior accessing the CART', () =>{
            InventoryPage.addLabLightToCart.click();
            InventoryPage.nameItemSelector(0).click();
            expect(browser).toHaveUrl(itemUrlFour);
            InventoryPage.shoppingCartLink.click();
            expect(browser).toHaveUrl(urlCart);
            expect(CartPage.cartQuantity).toHaveText("1");
            expect(CartPage.nameItemSelector(0)).toHaveText("Sauce Labs Bike Light");
            expect(CartPage.descriptionItemSelector(0))
            .toHaveText("A red light isn't the desired state in testing but it sure "
            +"helps when riding your bike at night. Water-resistant"
            +" with 3 lighting modes, 1 AAA battery included.");
            CartPage.checkOutBtn.click();
            expect(browser).toHaveUrl(urlCheckout);
            CheckoutPage.testCheckoutForm('Sebastian', 'Sileoni', '2000');
            expect(browser).toHaveUrl(urlCheckoutTwo);
            expect(CheckoutPage.nameItemSelector(0)).toHaveText("Sauce Labs Bike Light");
            expect(CheckoutPage.descriptionItemSelector(0))
            .toHaveText("A red light isn't the desired state in testing but it sure "
            +"helps when riding your bike at night. Water-resistant"
            +" with 3 lighting modes, 1 AAA battery included.");
            expect(CheckoutPage.priceItemSelector(0)).toHaveText("$9.99");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            expect(CheckoutPage.sumaryInfoLevelPaymentInformation)
            .toHaveText("Payment Information:");
            expect(CheckoutPage.sumaryInfoLevelPaymentValue)
            .toHaveText("SauceCard #31337");
            expect(CheckoutPage.sumaryInfoLevelShippingInformation)
            .toHaveText("Shipping Information:");
            expect(CheckoutPage.sumaryInfoLevelShippingValue)
            .toHaveText("FREE PONY EXPRESS DELIVERY!");
            expect(CheckoutPage.sumarySubTotal).toHaveText("Item total: $9.99");
            expect(CheckoutPage.sumaryTax).toHaveText("Tax: $0.80");
            expect(CheckoutPage.sumaryTotal).toHaveText("Total: $10.79");
            expect(CheckoutPage.cartQuantity).toHaveText("1");
            CheckoutPage.finishBtn.click();
            expect(browser).toHaveUrl(urlCheckoutComplete);
            CheckoutPage.backHome.click();            
            expect(browser).toHaveUrl(urlInventory);
            expect(InventoryPage.removeBackPackFromCart).not.toBeDisplayed();
            expect(InventoryPage.cartItemsCounter).not.toBeDisplayed();
        });  
    });
});