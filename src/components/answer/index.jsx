import { useState } from 'react';

function Answer({ num1, num2, updatePoints }) {
  const [answer, setAnswer] = useState('');

  const result = num1 + num2;

  function handleSubmit(evt) {
    evt.preventDefault();

    if (+answer === result) {
      updatePoints();
    }

    setAnswer('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        value={answer}
        onChange={(evt) => {
          setAnswer(evt.target.value);
        }}
        type="text"
        placeholder="Введите ответ"
      />
      <input type="submit" value="Проверить" />
    </form>
  );
}

export default Answer;
