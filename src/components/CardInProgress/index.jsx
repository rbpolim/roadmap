import { useContext } from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import { TodosContext } from '../../contexts/TodosContext';

import styles from './styles.module.scss';

export default function CardInProgress({ progress }) {
  const { handleCompleteInProgress, handleDeleteInProgress } = useContext(TodosContext);

  return (
    <div className={progress.isCompleted ? styles.containerCardCompleted : styles.containerCard }>
      <div>
        <span>{progress.tag}</span>

        <div>
          <button
            onClick={(event) => handleCompleteInProgress(event, progress.id)}
          >
            <MdDone size={20}/>
          </button>

          <button
            onClick={(event) => handleDeleteInProgress(event, progress.id)}
          >
            <MdDelete size={20}/>
          </button>
        </div>
      </div>

      <h3>{progress.text}</h3>
    </div>
  )
}