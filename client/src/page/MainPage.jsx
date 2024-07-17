import React, { useState } from 'react';
import './mainpage.css'; // You can add your own styles here

const MainPage = () => {
  const [count, setCount] = useState(1000);
  const [log, setLog] = useState([]);

  const increment = () => {
    setCount(count + 1);
    setLog([...log, `Incremented to ${count + 1}`]);
  };

  const decrement = () => {
    setCount(count - 1);
    setLog([...log, `Decremented to ${count - 1}`]);
  };

  return (
    <div className="container">
      <div className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <img src="https://via.placeholder.com/150" alt="Placeholder" className="image" />
      <div className="log">
        <h3>Log</h3>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
      <div className="count">Count: {count}</div>
    </div>
  );
};

export default MainPage;
