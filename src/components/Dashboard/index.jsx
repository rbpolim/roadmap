import ListTodo from '../ListTodo';
import List from '../List';
import styles from './styles.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.containerDashboard}>
      <ListTodo />
      <List title={"In process"}/>
    </div>
  );
}

