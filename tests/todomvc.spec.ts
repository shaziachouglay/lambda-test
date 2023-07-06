import { test, expect } from '@playwright/test';

test('should display message what needs to be done',
async({page}) =>{
    await page.goto('https://todomvc.com/examples/emberjs/');
    await expect(page.locator('#new-todo')).
    toHaveAttribute('placeholder','What needs to be done?')
});