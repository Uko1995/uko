export default function Stats({ items }) {
    if (items.length === 0) return (
      <footer className='stats'>
        <em>🌴 Ready to go on a trip? Enter your items to pack!</em>
      </footer>
    );
  
  
    const numItems = items.length;
    const numPacked = items.filter(item=> item.packed).length;
    const percentage = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  
    return (
      <footer className='stats'>
        {percentage === 100 ? (<em>You got everything! Ready to go ✈</em>) : (<em>👜 You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)</em>)}
      </footer>
    );
  }