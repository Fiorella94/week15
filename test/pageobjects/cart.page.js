class CartPage {
    /*Header*/
    get inventoryTitle () { return $('.title') }
    get shoppingCartLink () { return $('.shopping_cart_link') }
    get cartItemsCounter () { return $('.shopping_cart_badge') }
    /*Menu*/
    get burgerMenuBtn () { return $('#react-burger-menu-btn') }
    get closeMenuBtn () { return $('#react-burger-cross-btn') }
    get allItemsBtn () { return $('#inventory_sidebar_link') }
    get logOutBtn () { return $('#logout_sidebar_link') }
    get resetAppStateBtn () { return $('#reset_sidebar_link') }
    get closeMenuBtn () { return $('#react-burger-cross-btn') }
    get checkOutBtn () { return $('#checkout') }
    get cartQuantity () { return $('.cart_quantity') }
    get continueShopping () { return $('#continue-shopping') }
    /*Items*/
    /*Backpack ID: 4, img:1, name:0, desc:0, price:0*/
    get addBackPackToCart () { return $('#add-to-cart-sauce-labs-backpack') }
    get removeBackPackFromCart () { return $('#remove-sauce-labs-backpack') }    
    /*Lab light ID: 0, img:2, name:1, desc:1, price:1*/    
    get addLabLightToCart () { return $('#add-to-cart-sauce-labs-bike-light') }
    get removeLabLightFromCart () { return $('#remove-sauce-labs-bike-light') }    
    /*Bolt T-shirt ID: 1, img: 4, name: 2, desc: 2, price: 2*/    
    get addBoltTshirtToCart () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get removeBoltTshirtsFromCart () { return $('#remove-sauce-labs-bolt-t-shirt') }    
    /*Fleece jacket ID: 5, img: 6, name: 3, desc: 3, price: 3*/    
    get addFleeceJacketToCart () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get removeFleeceJacketFromCart () { return $('#remove-sauce-labs-fleece-jacket') }    
    /*Onsie ID: 2, img: 8, name: 4, desc: 4, price: 4*/    
    get addOnsieToCart () { return $('#add-to-cart-sauce-labs-onesie') }
    get removeOnsieFromCart () { return $('#remove-sauce-labs-onesie') }    
    /*Red shirt ID: 3, img: 10, name: 5, desc: 5, price: 5*/    
    get addRedShirtToCartOnInventory () {
        return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }
    get addRedShirtToCartOnItems () { return $('.btn_primary')  }      
    get removeRedShirtFromCartOnInventory () { 
        return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]') 
    }
    get removeRedShirtFromCartOnItems  () { return $('.btn_small') }
    /*SETTERS*/
    nameItemSelector (value) {
        return $$('.inventory_item_name')[value]
    }
    igmItemSelector (value) {
        return $$('.inventory_item_img')[value]
    }
    descriptionItemSelector (value) {
        return $$('.inventory_item_desc')[value]
    }
    priceItemSelector (value) {
        return $$('.inventory_item_price')[value]
    }
    sortItems (value) {
        this.productSorter.click();
        this.productSorter.$$('option')[`${value}`].click();
    }
    burgerMenuOption (option) {
        this.burgerMenuBtn.click();
        browser.pause(1000);
        option.click();
    }
    /* METHODS */
}    
module.exports = new CartPage();