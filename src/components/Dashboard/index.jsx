import ListTodo from '../ListTodo';
import ListInProgress from '../ListInProgress';

import styles from './styles.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.containerDashboard}>
      <ListTodo />
      <ListInProgress />
    </div>
  );
}

