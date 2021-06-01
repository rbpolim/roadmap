import ReactModal from 'react-modal';
import { useContext } from 'react';

import { TodosContext } from '../../contexts/TodosContext';

import styles from './styles.module.scss';

export default function ModalProgress() {
  const {
    isOpenProgress,
    inputTask,
    inputTag,
    handleModalProgress,
    handleChangeTask,
    handleChangeTag,
    handleCreateInProgress,
  } = useContext(TodosContext);

  return (
    <div>
      <ReactModal
        isOpen={isOpenProgress}
        onRequestClose={handleModalProgress}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0 , 0, 0.85)'
          },
          content: {
            position: 'absolute',
            top: '200px',
            left: '600px',
            right: '600px',
            bottom: '250px',
            border: '0px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            color: 'black',
          }
        }}
      >
        <form className={styles.container}>
          <h1>Task ✏️</h1>

          <input
            type="text"
            placeholder="What you want to do... "
            name="text"
            value={inputTask}
            onChange={handleChangeTask}
          />

          <input
            type="text"
            placeholder="Tag your task #"
            name="tag"
            value={inputTag}
            onChange={handleChangeTag}
          />

          <button onClick={handleCreateInProgress}>ADD TASK IN PROGRESS</button>
        </form>
      </ReactModal>
    </div>
  );
}