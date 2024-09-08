exports.hookPage=class hookPage{
    constructor(page){
        this.page=page;
        this.product_link_locator=page.locator("//a[contains(text(),'Baby Care')]");
        this.product_details_locator=page.locator("//div[contains(text(),'Baby Skincare')]");
    }
    async navigate_url(){
        await this.page.goto('https://chaldal.com/');
    }
    async click_product_link(){
        await this.product_link_locator.click();
    }
    async product_one_link(){
        await this.product_details_locator.click();
    }
}