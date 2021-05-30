import styles from './styles.module.scss';

export default function ListTodo({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}