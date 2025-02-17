import { Header } from '../components/Header';
import { PhotoCard } from '../components/PhotoCard';
import { StarField } from '../components/StarField';
import styles from './index.module.css';

const photos = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1536108978996-128e3e2a9783?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    photographer: 'Alex Nova',
    title: 'Andromeda Galaxy',
    likes: 1234,
    category: 'Galaxy',
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    photographer : "Jane Smith",
    title : "Nebula Beauty",
    likes : 200,
    category : "Nebula"
  }
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <StarField />
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <PhotoCard key={index} {...photo} />
          ))}
        </div>
      </main>
    </div>
  );
}
