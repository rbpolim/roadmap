import { createContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

export const TodosContext = createContext([])

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [inputTask, setInputTask] = useState('');
  const [inputTag, setInputTag] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!isOpen);
  }

  function handleChangeTask(event) {
    setInputTask(event.target.value);
  }

  function handleChangeTag(event) {
    setInputTag(event.target.value);
  }

  function handleCreateTodo(event) {
    event.preventDefault();

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

  function handleDeleteTask(event, id) {
    event.preventDefault();

    const todosFiltered = todos.filter(todo => todo.id !== id);

    setTodos(todosFiltered);
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
    console.log(todos)
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        inputTask,
        setInputTask,
        inputTag,
        setInputTag,
        isOpen,
        setIsOpen,
        handleModal,
        handleChangeTask,
        handleChangeTag,
        handleCreateTodo,
        handleDeleteTask,
        handleCompleteTask,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
