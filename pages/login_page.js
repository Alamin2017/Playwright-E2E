exports.LoginPage=class LoginPage{

    constructor(page){
        this.page=page; 
        this.username_field_locator=page.locator("//input[@id='username']");
        this.password_field_locator=page.locator("//input[@id='password']");
        this.login_button_locator=page.locator("//a[@id='log-in']");
    }
    async navigate_url(){
        await this.page.goto('https://demo.applitools.com/index.html');
    }
    async login_valid_credentials(user,pass){
        await this.username_field_locator.fill(user);
        await this.password_field_locator.fill(pass);
    }
    async click_login_button(){
        await this.login_button_locator.click();
    } 
};