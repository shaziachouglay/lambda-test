import { chromium, test,expect } from "@playwright/test"
import exp from "constants";


test('Login test demo', async ({}) =>
{
   const browser =  await chromium.launch(
    {
        headless:false
    }
   );
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://ecommerce-playground.lambdatest.io/");
   await page.hover("//a[@data-toggle ='dropdown']//span[contains(.,'My account')]");
   await page.click('text=Login');
   await page.locator('#input-email').fill('shazi018@gmail.com');
   await page.locator('#input-password').fill('Test123!');
   await page.locator("//input[@type='submit']").click();
   
   const  newContext = await browser.newContext();
   const newPage = await newContext.newPage();
   await newPage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
   await page.waitForTimeout(5000);


   



}
)