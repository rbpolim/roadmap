import { useContext } from 'react'
import { BiCommentAdd } from 'react-icons/bi';

import { TodosContext } from '../../contexts/TodosContext'
import Card from '../Card';
import Modal from '../Modal';

import styles from './styles.module.scss';

export default function ListTodo() {
  const { todos, handleModal } = useContext(TodosContext)

  return (
    <div className={styles.container}>
      <div>
        <h1>To do</h1>

        <button onClick={handleModal}>
          <BiCommentAdd size={30} />
        </button>
      </div>

      <Modal />

      {todos.map(todo => {
        return (
          <Card
            key={todo.id}
            todo={todo}
          />
        )
      })}
    </div>
  );
}
