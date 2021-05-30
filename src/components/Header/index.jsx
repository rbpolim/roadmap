import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>Todo List 📝</h1>
    </header>
  );
}