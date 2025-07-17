import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Quiz = () => {
  const { t } = useTranslation();
  const questions = t('questions', { returnObjects: true });
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div className="text-center text-gray-500">No questions available.</div>;
  }

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 900);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="quiz-container bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-auto mt-4">
      {!showResult ? (
        <>
          <h2 className="text-xl font-semibold text-cyan-300 mb-2">
            {t('question')} {current + 1}
          </h2>
          <p className="mb-6 text-lg text-white">{questions[current].question}</p>
          <div className="quiz-options flex flex-col gap-4 mb-6">
            {questions[current].options.map((option, idx) => {
              let btnClass =
                'py-3 px-4 rounded-lg border font-medium transition text-lg ';
              if (selected) {
                if (option === questions[current].answer) {
                  btnClass += 'bg-green-500 border-green-700 text-white';
                } else if (option === selected) {
                  btnClass += 'bg-red-500 border-red-700 text-white';
                } else {
                  btnClass += 'bg-gray-100 border-gray-200 text-gray-400';
                }
              } else {
                btnClass += 'bg-white/10 border-cyan-900 text-cyan-100 hover:bg-cyan-900/30 hover:border-cyan-400';
              }
              return (
                <button
                  key={idx}
                  className={btnClass}
                  disabled={!!selected}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-green-400 mb-2">{t('result')}</h2>
          <p className="quiz-result mb-6 text-lg text-white">
            {t('score')}: {score} / {questions.length}
          </p>
          <button
            className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition"
            onClick={restart}
          >
            {t('restart')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

