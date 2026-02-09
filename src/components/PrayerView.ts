import type { Prayer, PrayerSection } from '../types';

export class PrayerView {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(prayer: Prayer): void {
    this.container.innerHTML = `
      <div class="prayer-view">
        <button class="back-button" onclick="window.history.back()">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
          </svg>
          Indietro
        </button>
        
        <article class="prayer-content">
          <h1 class="prayer-title">${this.escapeHtml(prayer.title)}</h1>
          ${this.renderContent(prayer.content)}
        </article>
      </div>
    `;
  }

  private renderContent(sections: PrayerSection[]): string {
    return sections.map(section => {
      switch (section.type) {
        case 'title':
          const level = section.level || 2;
          return `<h${level} class="section-title">${this.escapeHtml(section.content)}</h${level}>`;
        
        case 'paragraph':
          return `<p class="prayer-paragraph">${this.escapeHtml(section.content)}</p>`;
        
        case 'italic':
          return `<p class="prayer-italic">${this.escapeHtml(section.content)}</p>`;
        
        case 'response':
          return `<p class="prayer-response">${this.escapeHtml(section.content)}</p>`;
        
        default:
          return '';
      }
    }).join('');
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
