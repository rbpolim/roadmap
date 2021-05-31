import { useContext } from 'react';

import { TodosContext } from '../contexts/TodosContext';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Modal from '../components/Modal';

import styles from './Home.module.scss';

export default function Home() {
  const { todos } = useContext(TodosContext);

  return (
    <div className={styles.container}>
      <Header />

      <Modal />

      <Dashboard todos={todos} />
    </div>
  );
}
