import styles from './StarField.module.css';
import { useEffect, useState } from 'react';

interface StarFieldProps {
  parallax?: boolean;
}

export const StarField = ({ parallax = false }: StarFieldProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  return (
    <div 
      className={styles.starField}
      style={parallax ? { transform: `translateY(${offset}px)` } : undefined}
    >
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </div>
  );
};
