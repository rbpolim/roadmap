import { createContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

export const TodosContext = createContext([]);

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  const [inputTask, setInputTask] = useState('');
  const [inputTag, setInputTag] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProgress, setIsOpenProgress] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }

  function handleModalProgress() {
    setIsOpenProgress(!isOpenProgress);
  }

  function handleChangeTask(event) {
    setInputTask(event.target.value);
  }

  function handleChangeTag(event) {
    setInputTag(event.target.value);
  }

  function handleCreateTodo(event) {
    event.preventDefault();

    if (!inputTask && !inputTag) {
      return;
    }

    const todoDetails = {
      id: uuidV4(),
      text: inputTask,
      tag: inputTag,
      isCompleted: false,
    }

    setTodos([...todos, todoDetails])

    setIsOpen(false);
    setInputTask('');
    setInputTag('');
  }

  function handleCreateInProgress(event) {
    event.preventDefault();

    if (!inputTask && !inputTag) {
      return;
    }

    const inProgressDetails = {
      id: uuidV4(),
      text: inputTask,
      tag: inputTag,
      isCompleted: false,
    }

    setInProgress([...inProgress, inProgressDetails])

    setIsOpenProgress(false);
    setInputTask('');
    setInputTag('');
  }

  function handleDeleteTask(event, id) {
    event.preventDefault();

    const todosFiltered = todos.filter(todo => todo.id !== id);

    setTodos(todosFiltered);
  }

  function handleDeleteInProgress(event, id) {
    event.preventDefault();

    const inProgressFiltered = inProgress.filter(i => i.id !== id);

    setInProgress(inProgressFiltered);
  }

  function handleCompleteTask(event, id) {
    event.preventDefault();

    const element = todos.findIndex(elem => elem.id === id)

    const newTodos = [...todos];

    newTodos[element] = {
      ...newTodos[element],
      isCompleted: true,
    }

    setTodos(newTodos);
  }

  function handleCompleteInProgress(event, id) {
    event.preventDefault();

    const element = inProgress.findIndex(elem => elem.id === id)

    const newInProgress = [...inProgress];

    newInProgress[element] = {
      ...newInProgress[element],
      isCompleted: true,
    }

    setInProgress(newInProgress);
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        inProgress,
        setTodos,
        inputTask,
        setInputTask,
        inputTag,
        setInputTag,
        isOpen,
        isOpenProgress,
        setIsOpen,
        setIsOpenProgress,
        handleModal,
        handleModalProgress,
        handleChangeTask,
        handleChangeTag,
        handleCreateTodo,
        handleCreateInProgress,
        handleDeleteTask,
        handleDeleteInProgress,
        handleCompleteTask,
        handleCompleteInProgress,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
