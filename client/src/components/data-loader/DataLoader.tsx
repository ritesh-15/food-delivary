import styles from "./DataLoader.module.css";

const DataLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default DataLoader;
