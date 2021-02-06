import styles from '../../../styles/components/Loader.module.css';

export function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.skCubeGrid}>
        <div className={styles.skCubeSkCube1}></div>
        <div className={styles.skCubeSkCube2}></div>
        <div className={styles.skCubeSkCube3}></div>
        <div className={styles.skCubeSkCube4}></div>
        <div className={styles.skCubeSkCube5}></div>
        <div className={styles.skCubeSkCube6}></div>
        <div className={styles.skCubeSkCube7}></div>
        <div className={styles.skCubeSkCube8}></div>
        <div className={styles.skCubeSkCube9}></div>
      </div>
    </div>
  );
}
