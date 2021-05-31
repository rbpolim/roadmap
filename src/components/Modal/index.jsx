import ReactModal from 'react-modal';
import { useContext } from 'react';

import { TodosContext } from '../../contexts/TodosContext';

import styles from './styles.module.scss';

export default function Modal() {
  const {
    isOpen,
    inputTask,
    inputTag,
    handleModal,
    handleChangeTask,
    handleChangeTag,
    handleCreateTodo,
  } = useContext(TodosContext);

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0 , 0, 0.9)'
          },
          content: {
            position: 'absolute',
            top: '200px',
            left: '600px',
            right: '600px',
            bottom: '300px',
            border: '0px',
            background: '#7d5fff',
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
          <h1>Task</h1>

          <input
            type="text"
            placeholder="Digite a tarefa"
            name="text"
            value={inputTask}
            onChange={handleChangeTask}
          />

          <input
            type="text"
            placeholder="Digite a tag"
            name="tag"
            value={inputTag}
            onChange={handleChangeTag}
          />

          <button onClick={handleCreateTodo}>Add Todo</button>
        </form>
      </ReactModal>
    </div>
  );
}