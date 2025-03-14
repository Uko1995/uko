import { useState } from 'react';
import './App.css';

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: true
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: false
  }
];

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}


function Logo() {
  return (
    <div className='logo'>
      <h1>🌴 FAR AWAY 💼</h1>
    </div>
  );
}

function Form() {
const [description, setDescription] = useState("");
const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    setDescription("");
    setQuantity(1);

  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} style={{backgroundColor: 'rgb(231, 178, 156)', border: 'none', borderRadius: '20px', padding: '8px 14px'}}>
        {Array.from({length: 20}, (_, i)=> i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input style={{backgroundColor: 'rgb(231, 178, 156)', border: 'none', borderRadius: '20px', padding: '8px 14px'}} type='text' placeholder='Item.......' value={description} onChange={(e) => setDescription(e.target.value)}  />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className='packing-list'>
      <ul className='list'>
        {initialItems.map(item=> <Item  item={item} key={item.id} />)}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.description}</span>
      <button style={{backgroundColor: 'transparent', color: 'red', border: 'none'}}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>👜 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}