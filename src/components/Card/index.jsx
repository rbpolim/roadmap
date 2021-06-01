import { useContext } from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import { TodosContext } from '../../contexts/TodosContext';

import styles from './styles.module.scss';

export default function Card({ todo }) {
  const { handleCompleteTask, handleDeleteTask } = useContext(TodosContext);

  return (
    <div className={todo.isCompleted ? styles.containerCardCompleted : styles.containerCard }>
      <div>
        <span>#{todo.tag}</span>

        <div>
          <button
            onClick={(event) => handleCompleteTask(event, todo.id)}
          >
            <MdDone size={20}/>
          </button>

          <button
            onClick={(event) => handleDeleteTask(event, todo.id)}
          >
            <MdDelete size={20}/>
          </button>
        </div>
      </div>

      <h3>{todo.text}</h3>
    </div>
  )
}