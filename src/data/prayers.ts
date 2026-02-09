import type { Prayer, PrayerCategory } from '../types';

export const prayers: Prayer[] = [
  {
    id: 'preghiera-mattino',
    title: 'Preghiera del Mattino',
    category: 'quotidiane',
    content: [
      { type: 'title', content: 'Atto di adorazione', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Ti adoro, mio Dio, e ti amo con tutto il cuore. Ti ringrazio di avermi creato, fatto cristiano e conservato in questa notte. Ti offro le azioni della giornata: fà che siano tutte secondo la tua volontà per la tua maggior gloria. Preservami dal peccato e da ogni male. La tua grazia sia sempre con me e con tutti i miei cari. Degnati, o Signore, di ricompensare con la vita eterna tutti quelli che mi fanno del bene nel tuo nome. Converti i peccatori, consola gli infermi, gli afflitti, i carcerati nelle loro tribolazioni. Agli agonizzanti che oggi morranno dona il Paradiso. Concedi il riposo eterno ai fedeli defunti. Amen.'
      },
      { type: 'italic', content: 'Padre, Ave e Gloria' },
      { type: 'title', content: 'Atto di fede', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Mio Dio, perché sei verità infallibile, credo fermamente tutto quello che tu hai rivelato e la santa Chiesa ci propone a credere. Ed espressamente credo in te, unico vero Dio in tre Persone uguali e distinte, Padre, Figlio e Spirito Santo. E credo in Gesù Cristo, Figlio di Dio, incarnato e morto per noi, il quale darà a ciascuno, secondo i meriti, il premio o la pena eterna. Conforme a questa fede voglio sempre vivere. Signore, accresci la mia fede.'
      },
      { type: 'title', content: 'Atto di speranza', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Mio Dio, spero dalla tua bontà, per le tue promesse e per i meriti di Gesù Cristo, nostro Salvatore, la vita eterna e le grazie necessarie per meritarla con le buone opere, che io debbo e voglio fare. Signore, che io possa goderti in eterno.'
      },
      { type: 'title', content: 'Atto di carità', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Mio Dio, ti amo con tutto il cuore sopra ogni cosa, perché sei bene infinito e nostra eterna felicità; e per amor tuo amo il prossimo come me stesso, e perdono le offese ricevute. Signore, che io ti ami sempre più.'
      },
      { type: 'title', content: 'Consacrazione all\'Immacolata', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Vergine Immacolata, Madre mia Maria, io rinnovo a te, oggi e per sempre, la consacrazione di tutto me stesso, perché tu disponga di me per il bene delle anime. Solo ti chiedo, o mia Regina e Madre della Chiesa, di cooperare fedelmente, come degno milite, alla tua missione, per l\'avvento del regno di Gesù nel mondo. Ti offro pertanto, o Cuore Immacolato di Maria, le preghiere, le azioni e i sacrifici di questo giorno secondo le intenzioni suggerite.'
      },
      { 
        type: 'italic', 
        content: 'O Maria, concepita senza peccato, prega per noi che a te ricorriamo, e per quanti a te non ricorrono, in particolare per i nemici della santa Chiesa e per quelli che ti sono raccomandati.'
      }
    ]
  },
  {
    id: 'preghiera-sera',
    title: 'Preghiera della Sera',
    category: 'quotidiane',
    content: [
      { type: 'title', content: 'Esame di coscienza', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Eterno Padre, ti ringrazio di tutti i benefici che mi hai concesso durante questo giorno. Ma mi dispiace di averti offeso. Perdonami, o Signore. Dimentica le mie colpe come io voglio dimenticare i torti ricevuti. Custodiscimi durante questa notte e fammi giungere al nuovo giorno per lodarti e servirti. Santa Maria, mia Madre, San Giuseppe e il mio Angelo Custode, vegliate su di me.'
      },
      { type: 'italic', content: 'Padre, Ave e Gloria' },
      { type: 'title', content: 'Atto di dolore', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Mio Dio, mi pento e mi dolgo con tutto il cuore dei miei peccati, perché peccando ho meritato i tuoi castighi, e molto più perché ho offeso te, infinitamente buono e degno di essere amato sopra ogni cosa. Propongo col tuo santo aiuto di non offenderti mai più e di fuggire le occasioni prossime di peccato. Signore, misericordia, perdonami.'
      }
    ]
  },
  {
    id: 'san-michele',
    title: 'San Michele Arcangelo',
    category: 'santi',
    content: [
      { type: 'title', content: 'Preghiera a San Michele Arcangelo', level: 2 },
      { 
        type: 'paragraph', 
        content: 'San Michele Arcangelo, difendici nella battaglia: sii il nostro aiuto contro la malizia e le insidie del demonio. Che Dio lo domini, te ne preghiamo! E tu, principe della milizia celeste, con il potere che ti viene da Dio, ricaccia nell\'inferno satana e gli altri spiriti maligni che si aggirano per il mondo a perdizione delle anime. Amen.'
      }
    ]
  },
  {
    id: 'spirito-santo',
    title: 'Allo Spirito Santo',
    category: 'trinitarie',
    content: [
      { type: 'title', content: 'Vieni, Santo Spirito', level: 2 },
      { 
        type: 'paragraph', 
        content: 'Vieni, Santo Spirito, manda a noi dal cielo un raggio della tua luce. Vieni, padre dei poveri, vieni, datore dei doni, vieni, luce dei cuori. Consolatore perfetto, ospite dolce dell\'anima, dolcissimo sollievo. Nella fatica, riposo, nella calura, riparo, nel pianto, conforto. O luce beatissima, invadi nell\'intimo il cuore dei tuoi fedeli. Senza la tua forza, nulla è nell\'uomo, nulla senza colpa. Lava ciò che è sordido, bagna ciò che è arido, sana ciò che sanguina. Piega ciò che è rigido, scalda ciò che è gelido, drizza ciò che è sviato. Dona ai tuoi fedeli che solo in te confidano i tuoi santi doni. Dona virtù e premio, dona morte santa, dona gioia eterna. Amen.'
      }
    ]
  },
  {
    id: 'sacro-cuore',
    title: 'Sacro Cuore di Gesù',
    category: 'gesu',
    content: [
      { type: 'title', content: 'Consacrazione al Sacro Cuore', level: 2 },
      { 
        type: 'paragraph', 
        content: 'O Gesù dolcissimo, o Redentore del genere umano, riguardateci umilmente prostrati davanti al vostro altare. Noi siamo vostri, e vostri vogliamo essere; e per vivere a Voi più strettamente congiunti, ecco che ognuno di noi oggi si consacra spontaneamente al vostro Sacratissimo Cuore. Molti purtroppo non Vi conobbero mai; molti, disprezzando i vostri comandamenti, Vi ripudiarono. O benignissimo Gesù, abbi misericordia e degli uni e degli altri, e tutti quanti attira al tuo Sacro Cuore.'
      }
    ]
  }
];

export const categories: PrayerCategory[] = [
  {
    id: 'quotidiane',
    name: 'Preghiere Quotidiane',
    description: 'Preghiere del mattino e della sera',
    prayers: prayers.filter(p => p.category === 'quotidiane')
  },
  {
    id: 'santi',
    name: 'Preghiere ai Santi',
    description: 'Preghiere di intercessione ai santi',
    prayers: prayers.filter(p => p.category === 'santi')
  },
  {
    id: 'trinitarie',
    name: 'Preghiere Trinitarie',
    description: 'Preghiere alla Santissima Trinità',
    prayers: prayers.filter(p => p.category === 'trinitarie')
  },
  {
    id: 'gesu',
    name: 'Preghiere a Gesù',
    description: 'Preghiere al Sacro Cuore e a Gesù',
    prayers: prayers.filter(p => p.category === 'gesu')
  }
];

export const rosaryMysteries = {
  gioiosi: {
    name: 'Misteri Gioiosi',
    color: '#FFC107',
    mysteries: [
      "L'annunciazione dell'Angelo a Maria",
      'La visita di Maria a Santa Elisabetta',
      'La nascita di Gesù a Betlemme',
      'La presentazione di Gesù al Tempio',
      'Il ritrovamento di Gesù nel Tempio'
    ]
  },
  luminosi: {
    name: 'Misteri Luminosi',
    color: '#2196F3',
    mysteries: [
      'Il battesimo di Gesù nel Giordano',
      'La rivelazione di Gesù alle nozze di Cana',
      "L'annuncio del Regno di Dio",
      'La trasfigurazione di Gesù',
      "L'istituzione dell'Eucaristia"
    ]
  },
  dolorosi: {
    name: 'Misteri Dolorosi',
    color: '#9C27B0',
    mysteries: [
      "L'agonia di Gesù nel Getsemani",
      'La flagellazione di Gesù',
      "L'incoronazione di spine",
      'Il viaggio al Calvario',
      'La crocifissione e morte di Gesù'
    ]
  },
  gloriosi: {
    name: 'Misteri Gloriosi',
    color: '#4CAF50',
    mysteries: [
      'La risurrezione di Gesù',
      "L'ascensione di Gesù al cielo",
      'La discesa dello Spirito Santo',
      "L'assunzione di Maria al cielo",
      "L'incoronazione di Maria Regina del cielo"
    ]
  }
};
