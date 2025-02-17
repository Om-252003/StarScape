import { useEffect, useState } from 'react';
import styles from './ParallaxStarField.module.css';

export const ParallaxStarField = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.starField}>
      <div 
        className={styles.stars} 
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />
      <div 
        className={styles.stars2} 
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div 
        className={styles.stars3} 
        style={{ transform: `translateY(${offset * 0.7}px)` }}
      />
    </div>
  );
};
