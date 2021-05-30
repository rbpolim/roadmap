import { useContext } from 'react';
import { BiCommentAdd } from 'react-icons/bi';

import { TodosContext } from '../contexts/TodosContext';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Modal from '../components/Modal';

import styles from './Home.module.scss';

export default function Home() {
  const { todos, handleModal } = useContext(TodosContext);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.input}>
        <h1>What do you want to do?</h1>

        <button
          className={styles.buttonOpenModal}
          onClick={handleModal}
        >
          <BiCommentAdd size={45} />
        </button>
      </div>

      <Modal />

      <Dashboard todos={todos} />
    </div>
  );
}
