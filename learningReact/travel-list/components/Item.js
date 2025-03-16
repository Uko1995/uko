export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li>
        <input style={{marginRight: '6px'}} type='checkbox' value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quantity} {item.description}</span>
        <button onClick={()=> onDeleteItem(item.id)} style={{cursor: 'pointer', backgroundColor: 'transparent', color: 'red', border: 'none'}}>❌</button>
      </li>
    );
  }