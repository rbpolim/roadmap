import Card from '../Card';

import styles from './styles.module.scss';

export default function List({ todos }) {
  return (
    <div className={styles.container}>
      <h1>Doing</h1>

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
