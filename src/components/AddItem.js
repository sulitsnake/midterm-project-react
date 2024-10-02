import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState({ id: '', name: '', category: 'Clothing', quantity: '', price: '' });
  const [message, setMessage] = useState('');

  const handleAddItem = () => {
    if (newItem.id && newItem.name && newItem.quantity && newItem.price) {
      onAddItem(newItem);
      setMessage('Item added successfully!');
      setNewItem({ id: '', name: '', category: 'Clothing', quantity: '', price: '' }); // Reset form
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div>
      {message && <Alert variant="success">{message}</Alert>}
      <Form>
        <Form.Group controlId="formItemId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item ID"
            value={newItem.id}
            onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formItemName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formItemQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formItemPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formItemCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          >
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Entertainment</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleAddItem} className="mt-3">
          Add Item
        </Button>
      </Form>
    </div>
  );
}

export default AddItem;