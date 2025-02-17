import { Camera, Share } from 'react-feather';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.brand}>StarScape</h1>
        <div className={styles.icons}>
          <button aria-label="Open camera">
            <Camera size={24} />
          </button>
          <button aria-label="Share">
            <Share size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};
