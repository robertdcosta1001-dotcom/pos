import React, { useEffect, useState } from 'react';

function POS() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', price: '' });

  useEffect(() => {
    fetch('/api/pos/items')
      .then(res => res.json())
      .then(setItems);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/pos/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const item = await res.json();
    setItems([...items, item]);
    setForm({ name: '', price: '' });
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default POS;