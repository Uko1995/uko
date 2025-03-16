import { useState } from "react";
import Item from './Item';

export default function PackingList({items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
  
    
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    
    
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className='packing-list'>
        <ul className='list'>
          {sortedItems.map(item=> <Item  item={item} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} key={item.id} />)}
        </ul>
        <div className='sort'>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{cursor: 'pointer', backgroundColor: 'rgb(231, 178, 156)', border: 'none', borderRadius: '20px', padding: '8px 14px'}}>
            <option value='input'>Sort by Input</option>
            <option value='description'>Sort by Description</option>
            <option value='packed'>Sort by Packed status</option>
          </select>
          <button style={{backgroundColor: 'rgb(231, 178, 156)', marginLeft: '10px', cursor: 'pointer', border: 'none', borderRadius: '20px', padding: '8px 14px'}} onClick={onClearList} >Clear List</button>
        </div>
      </div>
    );
  }