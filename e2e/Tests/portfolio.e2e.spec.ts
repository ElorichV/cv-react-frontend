import { test, expect } from '../Core/BaseTest';
import testData from '../TestData/portfolioTestData.json';

test.describe('Portfolio E2E Suite — Page Object Model (POM)', () => {

    test('QA_PRT_01_FilterProjectsByCategory_UpdatesVisibleCaseStudies', async ({ portfolioPage }) => {
        // Arrange
        await portfolioPage.goto();

        // Act & Assert — Data-Driven sobre las categorías definidas en TestData
        for (const cat of testData.categories) {
            await portfolioPage.selectProjectCategoryTab(cat.tabEs);
            const cards = portfolioPage.projectsSection.locator('h3');
            await expect(cards).toHaveCount(cat.expectedCount);
        }
    });

    test('QA_PRT_02_OpenArchitectureModal_DisplaysTechnicalDecisionsAndClosesCleanly', async ({ portfolioPage }) => {
        // Arrange
        await portfolioPage.goto();

        // Act
        await portfolioPage.openFirstArchitectureSpecModal();

        // Assert
        await expect(portfolioPage.closeArchitectureModalButton).toBeVisible();
        await portfolioPage.closeArchitectureSpecModal();
    });

    test('QA_PRT_03_OfflineModeAndDesignLore_ValidatesPokeDndLinkAndD20Engine', async ({ portfolioPage }) => {
        // Arrange
        await portfolioPage.goto();

        // Act
        await portfolioPage.triggerD20Roll();

        // Assert — Aserción sobre estado/atributo (href), sin pausas estáticas
        await expect(portfolioPage.pokeDndLink).toHaveAttribute('href', testData.hobbies.pokeDndUrl);
        await expect(portfolioPage.profileLoreBadge).toHaveAttribute('href', '#offline');
    });

    test('QA_PRT_04_LanguageToggle_SwitchesActiveStateBetweenEsAndEn', async ({ portfolioPage }) => {
        // Arrange
        await portfolioPage.goto();

        // Act
        await portfolioPage.toggleLanguage();

        // Assert
        await expect(portfolioPage.closeArchitectureModalButton).toBeHidden();
        await expect(portfolioPage.rollD20Button).toBeVisible();
    });
});
