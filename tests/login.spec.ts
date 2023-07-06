import { test, expect } from '@playwright/test';

test('should dislay the product page on succesful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
 
  await page.locator('[data-test="username"]').fill('standard_user');
  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('Product').isVisible();
});