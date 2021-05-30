import { useContext } from 'react';
import ReactModal from 'react-modal';

import { BiCommentAdd } from 'react-icons/bi';
import { TodosContext } from '../../contexts/TodosContext';

import styles from './styles.module.scss'

export default function TodoForm() {
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
    <div className={styles.container}>
      <h1>What do you want to do?</h1>

      <button
        className={styles.buttonOpenModal}
        onClick={handleModal}
      >
        <BiCommentAdd size={30} />
      </button>

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
            left: '500px',
            right: '500px',
            bottom: '200px',
            border: '1px solid #ccc',
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
        <form>
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