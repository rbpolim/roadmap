import { useContext } from 'react';
import { BiCommentAdd } from 'react-icons/bi';

import { TodosContext } from '../../contexts/TodosContext';
import CardInProgress from '../CardInProgress';
import ModalProgress from '../ModalProgress';

import styles from './styles.module.scss';

export default function ListInProgress() {
  const { inProgress, handleModalProgress } = useContext(TodosContext)

  return (
    <div className={styles.container}>
      <div>
        <h1>In Progress</h1>

        <button onClick={handleModalProgress}>
          <BiCommentAdd size={30} />
        </button>
      </div>

      <ModalProgress />

      {inProgress.map(progress => {
        return (
          <CardInProgress
            key={progress.id}
            progress={progress}
          />
        )
      })}
    </div>
  );
}