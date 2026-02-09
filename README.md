# Preghiamo.eu 2.0 ✨

Sito web moderno per la raccolta di preghiere cattoliche, completamente riscritto in TypeScript.

## 🚀 Caratteristiche

- **Single Page Application (SPA)** con routing client-side
- **TypeScript** per type safety e migliore developer experience
- **Design moderno e responsive** con animazioni fluide
- **Rosario interattivo** con selezione dei misteri
- **Performance ottimizzate** con Vite
- **Accessibilità** e best practices SEO

## 📦 Tecnologie

- TypeScript
- Vite (build tool)
- CSS3 con variabili custom
- Font: Cormorant Garamond & Montserrat

## 🛠️ Sviluppo

### Installazione

```bash
npm install
```

### Sviluppo locale

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

### Build per produzione

```bash
npm run build
```

I file compilati saranno nella cartella `dist/`

### Anteprima build

```bash
npm run preview
```

## 📁 Struttura del progetto

```
preghiere2/
├── src/
│   ├── components/      # Componenti UI
│   │   ├── HomeView.ts
│   │   ├── PrayerView.ts
│   │   └── RosaryView.ts
│   ├── data/           # Dati delle preghiere
│   │   └── prayers.ts
│   ├── styles/         # CSS
│   │   └── main.css
│   ├── types.ts        # TypeScript types
│   ├── router.ts       # Routing system
│   └── main.ts         # Entry point
├── favicon/            # Icone e manifest
├── index.html          # HTML principale
├── package.json
├── tsconfig.json       # Config TypeScript
└── vite.config.ts      # Config Vite
```

## 🙏 Contenuti

Il sito include:

- Preghiere quotidiane (mattino e sera)
- Santo Rosario interattivo
- Preghiere ai Santi
- Preghiere alla Santissima Trinità
- E molto altro...

## 📝 Fork e Licenza

Sarebbe preferibile richiedere l'aggiunta delle preghiere tramite mail ma, qualora vogliate forkare la repo, siete liberi di farlo A PATTO CHE:
- Non lo utilizziate per scopi di lucro, blasfemi e discriminatori
- Il sito, mio o vostro, non dovrà MAI avere alcuna pubblicità o link patreon (e simili) all'interno

## 📧 Contatti

Per suggerimenti o segnalazioni: preghiere@tmso.it

---

Realizzato con ❤️ e TypeScript
