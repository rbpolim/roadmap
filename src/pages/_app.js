import { TodosProvider } from '../contexts/TodosContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TodosProvider>
        <Component {...pageProps} />
      </TodosProvider>
    </>
  );
}

export default MyApp;
