import {test} from '../fixtures/POMFixtures';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

test('Login with valid credentials',async({loginObj}) => {
    await loginObj.navigate_url();
    await loginObj.login_valid_credentials("JackG","jack@123");
    await loginObj.click_login_button();
    await delay(5000);
});
test('Login with valid credentials 2',async({hookObj}) => {
    await hookObj.navigate_url();
    await hookObj.click_product_link();
    await hookObj.product_one_link();
    await delay(15000);
});
