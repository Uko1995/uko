import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import PackingList from './PackingList';
import Form from './Form';
import Stats from './Stats';


export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems(items=> [...items, item]);
  }

  const handleClearList = () => {
    const message = window.confirm('Are you sure you want to clear the list?');
    if (message) setItems([]);
  }

  const handleDeleteItem = (id) => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems(items => items.map(item => 
      item.id === id ? {...item, packed: !item.packed} : item
    ));
  };


  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </>
  );
}
