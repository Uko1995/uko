import './style.css';
import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const handleBillChange = (e) => {
    setBill(Number(e.target.value));
  }
  const totalTip = bill * ((tip + friendTip) / 2 / 100) ;

  const handleReset = () => {
    setBill('');
    setTip(0);
    setFriendTip(0);
  }
  return (
    <>
    <Bill bill={bill} onBillChange={handleBillChange} />
    <Service bill={bill} tip={tip} onSelect={setTip} >
      <p>How was the service?</p>
    </Service>
    <Service bill={bill} tip={friendTip} onSelect={setFriendTip} >
      <p>How did your friend like the service?</p>
    </Service>
    <Output bill={bill}  totalTip={totalTip}/>
    <Reset onReset={handleReset} />
    </>
  )
}

function Output({ bill, totalTip }) {
const charge = bill + totalTip;
  return (
    <div className='output'>
      {bill > 0 && <h3>Your pay is {charge} ({bill} + {totalTip})</h3>}
    </div>
  );
}


function Service({ children, tip, onSelect}) {
  
  return (
    <div className='bill'>
      {children}
      <select className='input' value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was Ok (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Bill({ bill, onBillChange }) {
  return (
    <div className='bill'>
      <p>How much was the bill?</p>
      <input className='input' value={bill} onChange={onBillChange} type="text" placeholder="Bill value"/>
    </div>
  )
}

function Reset({ children, onReset }) {
  return (
    <button style={{marginLeft: '20px', padding: '5px'}} onClick={onReset}>Reset</button>
  )
}