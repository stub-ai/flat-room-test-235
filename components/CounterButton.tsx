import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 active:bg-blue-700 focus:outline-none mr-2"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 active:bg-red-700 focus:outline-none"
        onClick={() => setCount(0)}
      >
        Reset to zero
      </button>
    </div>
  );
};

export default CounterButton;