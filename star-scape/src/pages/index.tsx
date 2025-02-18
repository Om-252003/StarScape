import { Header } from '../components/Header';
import { PhotoCard } from '../components/PhotoCard';
import { StarField } from '../components/StarField';
import styles from './index.module.css';

const photos = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1536108978996-128e3e2a9783?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photographer: 'Alex Nova',
    title: 'Andromeda Galaxy',
    likes: 5234,
    category: 'Galaxy',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photographer : "Jane Smith",
    title : "Nebula Beauty",
    likes : 8200,
    category : "Nebula"
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photographer: "Jane Foster",
    title: "Milky Way Over Desert",
    likes: 9876,
    category: "Galaxy"
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506007400999-15c600582f4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photographer: "Dan Danan",
    title: "Aurora Borealis in Iceland",
    likes: 6543,
    category: "Nature"
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1518889735218-3e3a03fd3128?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photographer: "Markus Spiske",
    title: "Starry Night Over Mountain Peaks",
    likes: 4321,
    category: "Landscape"
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1617128734662-66da6c1d3505?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "photographer": "Nicolas Hoizey",
    title: "Comet Neowise in the Night Sky",
    likes: 7654,
    category: "Astrophotography"
  },
  
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <StarField />
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <PhotoCard key={index} {...photo} index={index} /> 
          ))}
        </div>
      </main>
    </div>
  );
}
