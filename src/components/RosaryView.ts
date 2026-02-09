import { rosaryMysteries } from '../data/prayers';

interface RosaryState {
  mysteryType: 'gioiosi' | 'luminosi' | 'dolorosi' | 'gloriosi' | null;
  currentMystery: number;
  currentBead: number;
  prayers: string[];
  totalBeads: number;
}

export class RosaryView {
  private container: HTMLElement;
  private state: RosaryState = {
    mysteryType: null,
    currentMystery: 0,
    currentBead: 0,
    prayers: [],
    totalBeads: 0
  };

  private readonly commonPrayers = {
    padre: 'Padre nostro, che sei nei cieli, sia santificato il tuo nome, venga il tuo regno, sia fatta la tua volontà come in cielo così in terra. Dacci oggi il nostro pane quotidiano, e rimetti a noi i nostri debiti come noi li rimettiamo ai nostri debitori, e non ci indurre in tentazione, ma liberaci dal male. Amen.',
    ave: 'Ave, o Maria, piena di grazia, il Signore è con te. Tu sei benedetta fra le donne e benedetto è il frutto del tuo seno, Gesù. Santa Maria, Madre di Dio, prega per noi peccatori, adesso e nell\'ora della nostra morte. Amen.',
    gloria: 'Gloria al Padre e al Figlio e allo Spirito Santo. Come era nel principio, e ora e sempre, nei secoli dei secoli. Amen.',
    salveRegina: 'Salve, Regina, madre di misericordia, vita, dolcezza e speranza nostra, salve. A te ricorriamo, esuli figli di Eva; a te sospiriamo, gementi e piangenti in questa valle di lacrime. Orsù dunque, avvocata nostra, rivolgi a noi gli occhi tuoi misericordiosi. E mostraci, dopo questo esilio, Gesù, il frutto benedetto del tuo seno. O clemente, o pia, o dolce Vergine Maria.'
  };

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(): void {
    if (!this.state.mysteryType) {
      this.renderMysterySelection();
    } else {
      this.renderRosary();
    }
  }

  private renderMysterySelection(): void {
    this.container.innerHTML = `
      <div class="rosary-selection">
        <button class="back-button" onclick="window.history.back()">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
          </svg>
          Indietro
        </button>

        <h1 class="rosary-title">Santo Rosario</h1>
        <p class="rosary-subtitle">Scegli i misteri da meditare</p>

        <div class="mystery-selection-grid">
          ${this.renderMysteryCard('gioiosi', rosaryMysteries.gioiosi)}
          ${this.renderMysteryCard('luminosi', rosaryMysteries.luminosi)}
          ${this.renderMysteryCard('dolorosi', rosaryMysteries.dolorosi)}
          ${this.renderMysteryCard('gloriosi', rosaryMysteries.gloriosi)}
        </div>
      </div>
    `;

    this.attachMysteryListeners();
  }

  private renderMysteryCard(type: string, mystery: any): string {
    const icons = {
      gioiosi: '🌟',
      luminosi: '💡',
      dolorosi: '✝️',
      gloriosi: '👑'
    };

    return `
      <button class="mystery-card" data-mystery="${type}" style="--mystery-color: ${mystery.color}">
        <div class="mystery-icon">${icons[type as keyof typeof icons]}</div>
        <h3 class="mystery-name">${mystery.name}</h3>
        <ul class="mystery-list">
          ${mystery.mysteries.slice(0, 3).map((m: string) => `<li>${m}</li>`).join('')}
          ${mystery.mysteries.length > 3 ? '<li>...</li>' : ''}
        </ul>
      </button>
    `;
  }

  private attachMysteryListeners(): void {
    const buttons = this.container.querySelectorAll('[data-mystery]');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const mysteryType = button.getAttribute('data-mystery') as any;
        this.startRosary(mysteryType);
      });
    });
  }

  private startRosary(mysteryType: 'gioiosi' | 'luminosi' | 'dolorosi' | 'gloriosi'): void {
    this.state.mysteryType = mysteryType;
    this.state.currentMystery = 0;
    this.state.currentBead = 0;
    this.initializePrayers();
    this.render();
  }

  private initializePrayers(): void {
    const prayers: string[] = [];
    
    // Start with Credo
    prayers.push('Credo');
    prayers.push(this.commonPrayers.padre);
    prayers.push(this.commonPrayers.ave);
    prayers.push(this.commonPrayers.ave);
    prayers.push(this.commonPrayers.ave);
    prayers.push(this.commonPrayers.gloria);

    // 5 decades
    for (let decade = 0; decade < 5; decade++) {
      prayers.push(`MISTERO: ${rosaryMysteries[this.state.mysteryType!].mysteries[decade]}`);
      prayers.push(this.commonPrayers.padre);
      
      for (let i = 0; i < 10; i++) {
        prayers.push(this.commonPrayers.ave);
      }
      
      prayers.push(this.commonPrayers.gloria);
    }

    prayers.push(this.commonPrayers.salveRegina);

    this.state.prayers = prayers;
    this.state.totalBeads = prayers.length;
  }

  private renderRosary(): void {
    const currentPrayer = this.state.prayers[this.state.currentBead];
    const progress = ((this.state.currentBead + 1) / this.state.totalBeads) * 100;
    const mystery = rosaryMysteries[this.state.mysteryType!];

    this.container.innerHTML = `
      <div class="rosary-prayer" onclick="window.rosaryNext()">
        <div class="rosary-header">
          <h2 class="rosary-mystery-title" style="color: ${mystery.color}">
            ${mystery.name}
          </h2>
          <div class="rosary-progress-bar">
            <div class="rosary-progress-fill" style="width: ${progress}%; background-color: ${mystery.color}"></div>
          </div>
          <p class="rosary-counter">${this.state.currentBead + 1} / ${this.state.totalBeads}</p>
        </div>

        <div class="rosary-prayer-content">
          <p class="current-prayer">${this.formatPrayer(currentPrayer)}</p>
        </div>

        <div class="rosary-controls">
          <button class="rosary-btn-secondary" onclick="event.stopPropagation(); window.rosaryPrev()">
            Indietro
          </button>
          <button class="rosary-btn-primary" onclick="window.rosaryNext()">
            ${this.state.currentBead === this.state.totalBeads - 1 ? 'Fine' : 'Avanti'}
          </button>
        </div>
      </div>
    `;

    this.attachRosaryListeners();
  }

  private formatPrayer(prayer: string): string {
    if (prayer.startsWith('MISTERO:')) {
      return `<strong style="color: var(--accent-color);">${prayer.replace('MISTERO: ', '')}</strong>`;
    }
    return prayer;
  }

  private attachRosaryListeners(): void {
    (window as any).rosaryNext = () => this.nextBead();
    (window as any).rosaryPrev = () => this.prevBead();
  }

  private nextBead(): void {
    if (this.state.currentBead < this.state.totalBeads - 1) {
      this.state.currentBead++;
      this.render();
    } else {
      // Finish rosary
      this.finishRosary();
    }
  }

  private prevBead(): void {
    if (this.state.currentBead > 0) {
      this.state.currentBead--;
      this.render();
    }
  }

  private finishRosary(): void {
    this.container.innerHTML = `
      <div class="rosary-complete">
        <div class="complete-icon">✨</div>
        <h2>Rosario Completato</h2>
        <p>Hai completato la recita del Santo Rosario</p>
        <p class="mystery-name">${rosaryMysteries[this.state.mysteryType!].name}</p>
        <button class="rosary-btn-primary" onclick="window.history.back()">
          Torna alla Home
        </button>
      </div>
    `;
  }
}
