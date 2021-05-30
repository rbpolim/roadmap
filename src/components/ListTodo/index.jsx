import { useContext } from 'react'
import { TodosContext } from '../../contexts/TodosContext'

import Card from '../Card';

import styles from './styles.module.scss';

export default function ListTodo() {
  const { todos } = useContext(TodosContext)

  return (
    <div className={styles.container}>
      <h1>To do</h1>

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
