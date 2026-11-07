import { test as base, expect } from '@playwright/test';
import { PortfolioPage } from '../Pages/PortfolioPage';
import testData from '../TestData/portfolioTestData.json';

type PortfolioFixtures = {
    portfolioPage: PortfolioPage;
};

/**
 * BaseTest jerárquico (qa-playwright-master + testing sección 5):
 * Intercepta llamadas de red a /api/Profile con datos deterministas de TestData
 * para que ningún test por defecto dependa de un servidor externo real.
 */
export const test = base.extend<PortfolioFixtures>({
    portfolioPage: async ({ page }, use) => {
        await page.route('**/api/Profile*', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(testData.mockProfileEs)
            });
        });

        const portfolioPage = new PortfolioPage(page);
        await use(portfolioPage);
    }
});

export { expect };
