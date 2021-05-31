import { useContext } from 'react'
import { TodosContext } from '../../contexts/TodosContext'

import { BiCommentAdd } from 'react-icons/bi';

import Card from '../Card';

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
