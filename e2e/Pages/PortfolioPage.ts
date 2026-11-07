import { type Page, type Locator, expect } from '@playwright/test';

/**
 * Page Object Model (POM) para el Portafolio de Axel Linares.
 * Cumple con el estándar qa-playwright-master: ningún archivo de test interactúa con selectores crudos.
 */
export class PortfolioPage {
    readonly page: Page;
    readonly languageToggleButton: Locator;
    readonly profileLoreBadge: Locator;
    readonly projectsSection: Locator;
    readonly architectureModal: Locator;
    readonly closeArchitectureModalButton: Locator;
    readonly offlineSection: Locator;
    readonly rollD20Button: Locator;
    readonly pokeDndLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.languageToggleButton = page.locator('header button', { hasText: /ES.*EN/ });
        this.profileLoreBadge = page.locator('#sobre-mi a[href="#offline"]');
        this.projectsSection = page.locator('#proyectos');
        this.architectureModal = page.locator('div.fixed.inset-0');
        this.closeArchitectureModalButton = page.locator('button', { hasText: /Cerrar_Expediente|Close_Dossier/ });
        this.offlineSection = page.locator('#offline');
        this.rollD20Button = page.locator('#offline button', { hasText: /Tirar D20|Roll D20/ });
        this.pokeDndLink = page.locator('#offline a[href="https://pokedyd.online/"]').first();
    }

    async goto(baseUrl = 'http://localhost:5173/') {
        await this.page.goto(baseUrl);
        await expect(this.projectsSection).toBeVisible();
    }

    async toggleLanguage() {
        await this.languageToggleButton.click();
    }

    async selectProjectCategoryTab(categoryLabel: string) {
        const tabButton = this.projectsSection.locator('button', { hasText: categoryLabel });
        await tabButton.click();
    }

    async openFirstArchitectureSpecModal() {
        const specBtn = this.projectsSection.locator('button', { hasText: /Ficha_Arquitectura|Architecture_Spec/ }).first();
        await specBtn.click();
        await expect(this.closeArchitectureModalButton).toBeVisible();
    }

    async closeArchitectureSpecModal() {
        await this.closeArchitectureModalButton.click();
        await expect(this.closeArchitectureModalButton).toBeHidden();
    }

    async triggerD20Roll() {
        await this.rollD20Button.scrollIntoViewIfNeeded();
        await this.rollD20Button.click();
    }
}
