import React, { useState, useEffect, useRef } from "react";
import { adult } from "../assets/adult";

const Adult = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const Opt1 = useRef(null);
  const Opt2 = useRef(null);
  const Opt3 = useRef(null);
  const Opt4 = useRef(null);

  const option_array = [Opt1, Opt2, Opt3, Opt4];

  // Shuffle and select 10 random questions
  useEffect(() => {
    const shuffledQuestions = [...adult]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex === 9) {
      setQuizFinished(true);
    } else {
      // Reset styles for the options before moving to the next question
      option_array.forEach((opt) => {
        if (opt.current) {
          opt.current.classList.remove("correct", "wrong");
        }
      });
      // Reset the lock and move to the next question
      setLock(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const checkAns = (e, selectedOption) => {
    if (!lock) {
      if (questions[currentQuestionIndex].ans === selectedOption) {
        e.target.classList.add("correct");
        setScore((prevScore) => prevScore + 1);
      } else {
        e.target.classList.add("wrong");
        option_array[questions[currentQuestionIndex].ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setLock(false);
    option_array.forEach((opt) => {
      if (opt.current) {
        opt.current.classList.remove("correct", "wrong");
      }
    });
    const shuffledQuestions = [...adult]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setQuestions(shuffledQuestions);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex items-center justify-center min-h-screen relative h-full w-full bg-neutral-900">
      <div className="absolute  bg-fixed inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

      <main className="text-[#453847] w-full sm:w-[90%] md:w-[80%] lg:w-[640px] m-auto my-8 bg-[#eae9eb] flex flex-col gap-4 rounded-lg py-6 px-4 sm:px-6 md:px-8 relative z-10 max-w-[90vw]  max-h-[90vh]">
        <h1 className="text-center text-3xl sm:text-4xl text-[#453847] font-nunito-regular font-extrabold pb-3 border-b-2 border-[#453847]">
          Quiz Game
        </h1>

        {quizFinished ? (
          <>
            <h2 className="text-center font-nunito-regular text-2xl sm:text-3xl text-[#453847] pt-3 font-extrabold">
              {score >= 5 ? "Congratulations, You Won!" : "You Lose!"}
            </h2>
            <button
              className=" font-nunito-regular border-2 bg-[#453847] text-[#eae9eb] px-4 py-2 text-lg sm:w-1/2 md:w-1/4 rounded-md hover:scale-105 transition-transform mx-auto mt-5"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col items-start text-sm sm:text-base md:text-lg">
              <p className="mb-3 font-nunito-regular font-bold">{currentQuestion.question}</p>
              <ul className="list-decimal w-[80%] sm:w-[90%] ml-5 text-xs font-nunito-regular font-semibold sm:text-sm md:text-base">
                <li
                  ref={Opt1}
                  onClick={(e) => {
                    checkAns(e, 1);
                  }}
                  className="mb-2 p-2 border-[1px] hover:cursor-pointer rounded-full border-[#453847] mx-1"
                >
                  {currentQuestion.opt1}
                </li>
                <li
                  ref={Opt2}
                  onClick={(e) => {
                    checkAns(e, 2);
                  }}
                  className="mb-2 p-2 border-[1px] hover:cursor-pointer rounded-full border-[#453847] mx-1"
                >
                  {currentQuestion.opt2}
                </li>
                <li
                  ref={Opt3}
                  onClick={(e) => {
                    checkAns(e, 3);
                  }}
                  className="mb-2 p-2 border-[1px] hover:cursor-pointer rounded-full border-[#453847] mx-1"
                >
                  {currentQuestion.opt3}
                </li>
                <li
                  ref={Opt4}
                  onClick={(e) => {
                    checkAns(e, 4);
                  }}
                  className="mb-2 p-2 border-[1px] hover:cursor-pointer rounded-full border-[#453847] mx-1"
                >
                  {currentQuestion.opt4}
                </li>
              </ul>
            </div>

            <div className="font-nunito-regular flex items-center flex-col gap">
              <button
                className="font-semibold mb-3 border-2 bg-[#453847] text-[#eae9eb] px-4 py-2 text-lg sm:w-1/2 md:w-1/4 rounded-md hover:scale-105 transition-transform"
                onClick={handleNext}> {currentQuestionIndex === 9 ? "Finish Quiz" : "Next"}
              </button>

              <p className="text-sm sm:text-base md:text-lg">Question: {currentQuestionIndex + 1} out of 10</p>
              <p className="text-sm sm:text-base md:text-lg">Score: {score} / 10</p>

            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Adult;
