import styles from './page.module.css';
import { ChatContainer } from './components/ChatContainer';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ChatContainer />
      </main>
    </div>
  );
}
