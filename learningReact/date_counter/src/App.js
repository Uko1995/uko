import { useState } from "react";

const buttonStyle = {
  padding: '5px 10px',
  margin: '10px 10px',
  fontSize: '20px',
  cursor: 'pointer',
};

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const handleAddStep = () => setStep(step + 1);
  const handleReduceStep = () => setStep(step - 1);
  const handleAddCount = () => {
    if (step === 0) {
      setCount(c => c + 1);
    }
    else setCount(c => c + step);
  }
  const handleReduceCount = () => {
    if (step === 0) {
      setCount(c => c -  1);
    }
    else setCount(c => c - step);
  }
  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + count);


  const messages = [
    `${count} days from today is ${newDate.toDateString()}`,
    `Today is ${today.toDateString()}`,
    `${Math.abs(count)} days ago was ${newDate.toDateString()}`,
  ];

  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleReduceStep} style={buttonStyle}>-</button>
        <p>Steps: {step}</p>
        <button onClick={handleAddStep} style={buttonStyle}>+</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleReduceCount} style={buttonStyle}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleAddCount} style={buttonStyle}>+</button>
      </div>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{count === 0 && messages[1]}</p>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{count < 0 && messages[2]}</p>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{count > 0 && messages[0]}</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}