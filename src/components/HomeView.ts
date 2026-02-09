import { prayers, categories } from '../data/prayers';
import { router } from '../router';

export class HomeView {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(): void {
    this.container.innerHTML = `
      <div class="home-view">
        <header class="home-header">
          <h1 class="site-title">Preghiamo.eu</h1>
          <p class="site-description">Raccolta personale di preghiere cattoliche</p>
        </header>

        <nav class="prayer-nav">
          <div class="featured-section">
            <h2 class="section-title">In Evidenza</h2>
            <div class="featured-cards">
              ${this.renderFeaturedCard('preghiera-mattino', 'Preghiera del Mattino', '🌅', 'Inizia la giornata con Dio')}
              ${this.renderFeaturedCard('preghiera-sera', 'Preghiera della Sera', '🌙', 'Chiudi la giornata in preghiera')}
              ${this.renderRosaryCard()}
            </div>
          </div>

          ${categories.map(category => `
            <section class="category-section">
              <h2 class="section-title">${category.name}</h2>
              <p class="category-description">${category.description || ''}</p>
              <div class="prayer-list">
                ${category.prayers.map(prayer => `
                  <a href="/prayer/${prayer.id}" class="prayer-link" data-link>
                    <div class="prayer-card">
                      <h3 class="prayer-card-title">${prayer.title}</h3>
                    </div>
                  </a>
                `).join('')}
              </div>
            </section>
          `).join('')}

          <div class="all-prayers-section">
            <h2 class="section-title">Tutte le Preghiere</h2>
            <div class="prayer-grid">
              ${prayers.filter(p => !['preghiera-mattino', 'preghiera-sera'].includes(p.id))
                .map(prayer => `
                  <a href="/prayer/${prayer.id}" class="prayer-link" data-link>
                    <div class="prayer-card-small">
                      ${prayer.title}
                    </div>
                  </a>
                `).join('')}
            </div>
          </div>
        </nav>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderFeaturedCard(id: string, title: string, emoji: string, description: string): string {
    return `
      <a href="/prayer/${id}" class="featured-card" data-link>
        <div class="featured-emoji">${emoji}</div>
        <h3 class="featured-title">${title}</h3>
        <p class="featured-description">${description}</p>
      </a>
    `;
  }

  private renderRosaryCard(): string {
    return `
      <a href="/rosary" class="featured-card rosary-card" data-link>
        <div class="featured-emoji">📿</div>
        <h3 class="featured-title">Santo Rosario</h3>
        <p class="featured-description">Recita il Rosario interattivo</p>
      </a>
    `;
  }

  private attachEventListeners(): void {
    const links = this.container.querySelectorAll('[data-link]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href) {
          router.navigate(href);
        }
      });
    });
  }
}
