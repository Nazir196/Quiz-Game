import React, { useState } from 'react';
import Kids from './components/Kids';
import Adult from './components/Adult';

function App() {
  const [isKidSelected, setIsKidSelected] = useState(null);

  if (isKidSelected === true) {
    return <Kids />;
  } else if (isKidSelected === false) {
    return <Adult />;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen relative h-full w-full bg-neutral-900'>
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

      <main className="text-[#453847] items-center w-full sm:w-[90%] md:w-[80%] lg:w-[400px] m-auto my-8 bg-[#eae9eb] flex flex-col gap-4 rounded-lg py-6 px-4 sm:px-6 md:px-8 relative z-10 max-w-[90vw]  max-h-[90vh]">
        <h1 className='text-4xl sm:text-5xl font-nunito-regular font-extrabold p-5 text-white bg-[#453847] rounded-full mb-8'>
          Quizz Game
        </h1>

        <h3 className='text-2xl font-nunito-regular font-bold sm:text-2xl mb-3'>Let's Get Started</h3>

        <div className='flex font-nunito-regular flex-col sm:flex-row gap-1 w-full justify-center'>
          <button
            className='border-2 bg-[#453847] text-[#eae9eb] px-4 py-2 text-lg w-full sm:w-[120px] rounded-lg hover:scale-105 transition-transform'
            onClick={() => setIsKidSelected(true)}
          >
            Kid
          </button>
          <button
            className='border-2 bg-[#453847] text-[#eae9eb] px-4 py-2 text-lg w-full sm:w-[120px] rounded-lg hover:scale-105 transition-transform'
            onClick={() => setIsKidSelected(false)}
          >
            Adult
          </button>
        </div>

        {isKidSelected === null ? (
          <p className="font-nunito-regular text-center text-sm sm:text-base">
            Are you a kid or an adult?
          </p>
        ) : isKidSelected ? (
          <Kids />
        ) : (
          <Adult />
        )}
      </main>
      <footer className="absolute bottom-0 w-full text-center py-4 px-2 border-t border-gray-600 pt-2">
      <p className="text-gray-400 text-sm">
  &copy; {new Date().getFullYear()} Quiz Game. Created by Muaz Nazir using React & Tailwind CSS.
  <a
    href="https://muaz-nazir.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-1 underline text-gray-300 hover:text-blue-200"
  >
    For Contact
  </a>
</p>
    </footer>
    </div>
  );
}

export default App;
