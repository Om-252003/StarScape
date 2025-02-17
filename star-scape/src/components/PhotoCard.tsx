import { Heart } from 'react-feather';
import styles from './PhotoCard.module.css';

interface PhotoCardProps {
  imageUrl: string;
  photographer: string;
  title: string;
  likes: number;
  category: string;
}

export const PhotoCard = ({
  imageUrl,
  photographer,
  title,
  likes,
  category,
}: PhotoCardProps) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{title}</h3>
            <p>by {photographer}</p>
          </div>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.likes}>
              <Heart size={16} /> {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
