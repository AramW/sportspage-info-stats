import { expect, test } from '@playwright/test';

test('navigate test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Livescore' })).toBeVisible();
  // await expect(page.locator('h2')).toHaveText('LiveSports');
});
