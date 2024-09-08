import{test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/login_page";
import { hookPage } from "../pages/hook_page";

exports.test=baseTest.extend({
    loginObj: async ({ page }, use) => {
        const loginObj = new LoginPage(page);
        await use(loginObj);
    },
    hookObj: async ({ page }, use) => {
        const hookObj = new hookPage(page);
        await use(hookObj);
    }
});