import './styles/main.css';
import { router } from './router';
import { HomeView } from './components/HomeView';
import { PrayerView } from './components/PrayerView';
import { RosaryView } from './components/RosaryView';
import { prayers } from './data/prayers';

// Get the main app container
const app = document.getElementById('app');

if (!app) {
  throw new Error('App container not found');
}

// Initialize views
const homeView = new HomeView(app);
const prayerView = new PrayerView(app);
const rosaryView = new RosaryView(app);

// Register routes
router.register('/', () => {
  homeView.render();
  document.title = 'Preghiamo.eu - Preghiere Cattoliche';
});

router.register('/prayer/:id', () => {
  const prayerId = router.getParam('id');
  const prayer = prayers.find(p => p.id === prayerId);
  
  if (prayer) {
    prayerView.render(prayer);
    document.title = `${prayer.title} - Preghiamo.eu`;
    window.scrollTo(0, 0);
  } else {
    router.navigate('/');
  }
});

router.register('/rosary', () => {
  rosaryView.render();
  document.title = 'Santo Rosario - Preghiamo.eu';
  window.scrollTo(0, 0);
});

// Start the router
router.start();
