import styles from './StarField.module.css';

export const StarField = () => {
  return (
    <div className={styles.starField}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </div>
  );
};
