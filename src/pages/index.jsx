import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Modal from '../components/Modal';

import styles from './Home.module.scss';
import ModalProgress from '../components/ModalProgress';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Dashboard />
    </div>
  );
}
