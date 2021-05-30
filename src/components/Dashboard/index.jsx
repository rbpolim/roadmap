import List from '../List';
import styles from './styles.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <List />
      <List />
      <List />
    </div>
  );
}

