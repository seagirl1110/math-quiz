import { useState } from 'react';
import Answer from '../answer';
import styles from './styles.module.css';

function MathQuiz() {
  const [count, setCount] = useState(0);

  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  function updatePoints() {
    setCount(count + 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>Ваши очки: {count}</div>
      <div className={styles.text}>
        {a} + {b} = ?
      </div>
      <Answer num1={a} num2={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
