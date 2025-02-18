import { Heart } from 'react-feather';
import styles from './PhotoCard.module.css';
import { Link } from 'react-router-dom';

interface PhotoCardProps {
  imageUrl: string;
  photographer: string;
  title: string;
  likes: number;
  category: string;
  index: number;
}

export const PhotoCard = ({
  imageUrl,
  photographer,
  title,
  likes,
  category,
  index,
}: PhotoCardProps) => {
  return (
    <Link to={`/photo/${index}`} className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{title}</h3>
            <p>{photographer}</p>
          </div>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <div className={styles.likes}>
              <Heart size={16} />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
