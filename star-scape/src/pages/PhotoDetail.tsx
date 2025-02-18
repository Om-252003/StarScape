import { useParams } from 'react-router-dom';
import { StarField } from '../components/StarField';
import { PhotoInfo } from '../components/PhotoInfo';
import styles from './PhotoDetail.module.css';
import { photos } from '../data/photos.ts';

export const PhotoDetail = () => {
  const { id } = useParams();
  const photo = photos[Number(id)];

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className={styles.container}>
      <StarField parallax />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className={styles.featuredImage}
          />
        </div>
        <PhotoInfo photo={photo} />
      </main>
    </div>
  );
};
