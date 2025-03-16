import { useState } from "react";

export default function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      quantity: quantity,
      description: description,
      packed: false,
      id: Date.now()
    };
    onAddItems(newItem);

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