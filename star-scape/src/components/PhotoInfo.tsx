import { Heart, Share, Camera } from 'react-feather';
import styles from './PhotoInfo.module.css';

interface PhotoInfoProps {
  photo: {
    title: string;
    photographer: string;
    likes: number;
    category: string;
    imageUrl: string;
  };
}

export const PhotoInfo = ({ photo }: PhotoInfoProps) => {
  return (
    <div className={styles.infoPanel}>
      <div className={styles.header}>
        <h1 className={styles.title}>{photo.title}</h1>
        <div className={styles.photographer}>
          <div className={styles.avatar}>
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${photo.photographer}`}
              alt={photo.photographer}
            />
          </div>
          <span>{photo.photographer}</span>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <Camera size={16} />
          <span>Sony A7III</span>
        </div>
        <div className={styles.detail}>
          <span>ƒ/2.8</span>
          <span>1/1000s</span>
          <span>ISO 100</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <Heart size={20} />
          <span>{photo.likes}</span>
        </button>
        <button className={styles.actionButton}>
          <Share size={20} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};