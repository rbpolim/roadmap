import ListTodo from '../ListTodo';
import List from '../List';
import styles from './styles.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.containerDashboard}>
      <ListTodo />
      <List title={"Doing"}/>
      <List title={"Done"}/>
    </div>
  );
}

