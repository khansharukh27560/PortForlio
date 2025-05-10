import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function SimpleQuiz() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0); // current question index
  const [selected, setSelected] = useState('')
  const [score, setScore] = useState(0)
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
      .catch(err => console.log("Error fetching questions", err));
  }, []);

  // if (questions?.length <= 0) return <p>Loading...</p>;

  const current = questions[index];
  const options = [...current.incorrect_answers, current.correct_answer]
    .sort(() => Math.random() - 0.5); // shuffle options

  const handleClick = () => {
    if (selected === current.correct_answer) {
      setScore(score + 1)
    }

    if (index < questions.length - 1) {
      setIndex(index + 1)
      setSelected('')
    } else {
      Swal.fire({
        title: "Well done!",
        text: `You ${score} out of ${questions.length} answered correctly!`,
        icon: "success",
        confirmButtonText: "Next"
      }).then(() => {
        setIndex(0)
        setScore(0)
      })
    }
  }
  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }
  return (
    <div className='mainTodo' style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1 className='heading'>Quiz app</h1>
      <h1 className=''>Question {index + 1}</h1>
      <p dangerouslySetInnerHTML={{ __html: current.question }} />

      <ul>
        {options.map((opt, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                name="ans"
                value={opt}
                checked={selected === opt}
                onChange={(e) => setSelected(e.target.value)}
              />{' '}
              <span dangerouslySetInnerHTML={{ __html: opt }} />
            </label>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleBack} disabled={index === 0}>Back</button>
        <button onClick={handleClick} disabled={!selected && index < questions.length - 1}>Next</button>
      </div>

    </div>
  );
}
