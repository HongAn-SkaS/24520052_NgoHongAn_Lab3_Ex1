
import DeveloperCard from './components/DeveloperCard';

const developer = {
  name: 'Alex Morgan',
  role: 'Frontend Developer',
  avatarUrl: 'https://i.pravatar.cc/120?img=12',
  bio: 'Passionate developer who enjoys building accessible web applications and competitive gaming.',
  location: 'Ho Chi Minh City, Vietnam',
  experience: '2 Years',

  gaming: {
    game: 'League of Legends',
    rank: 'Diamond',
    mainRole: 'Mid Lane',
  },

  skills: [
    {
      id: 1,
      name: 'HTML5',
      category: 'Frontend',
      level: 'Advanced',
    },
    {
      id: 2,
      name: 'CSS3',
      category: 'Frontend',
      level: 'Advanced',
    },
    {
      id: 3,
      name: 'JavaScript',
      category: 'Programming',
      level: 'Intermediate',
    },
    {
      id: 4,
      name: 'React',
      category: 'Frontend',
      level: 'Intermediate',
    },
    {
      id: 5,
      name: 'Git',
      category: 'Tools',
      level: 'Intermediate',
    },
  ],
};

function App() {
  return (
    <main>
      <DeveloperCard developer={developer} />
    </main>
  );
}

export default App;
