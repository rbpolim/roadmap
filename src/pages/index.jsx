import { useContext } from 'react';

import List from '../components/List';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import { TodosContext } from '../contexts/TodosContext';

import styles from './Home.module.scss';
import Dashboard from '../components/Dashboard';

export default function Home() {
  const { todos } = useContext(TodosContext);

  return (
    <div className={styles.container}>
      <Header />

      <TodoForm />

      {/* <Dashboard /> */}

      <div className={styles.containerDashboard}>
        <List todos={todos} />
      </div>
    </div>
  );
}
