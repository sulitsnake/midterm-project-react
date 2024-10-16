import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function AddItem({ onAddItem, inventory }) {
  const [newItem, setNewItem] = useState({ id: '', name: '', category: 'Clothing', quantity: '', price: '' });
  const [message, setMessage] = useState('');

  const handleAddItem = () => {

    //checks if an ID already exists and prevents adding an item with a duplicate ID
    const existingItem = inventory.find(item => item.id === newItem.id);
    if (existingItem) {
      setMessage('Item ID already exists! Please use a different ID.');
      return; 
    }

    //regex for ID 
    const idPattern = /^[a-zA-Z0-9]+$/;
    if (!idPattern.test(newItem.id)) {
      setMessage('Item ID can only contain letters (A-Z) and numbers (0-9).');
      return; 
    }

    // validation to check if price or quantity isn't negative
    if (newItem.quantity < 0 || newItem.price < 0) {
      setMessage('Please enter a valid number for the Price and Quantity.');
      return; 
    }

    // checking if all fields are filled
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
      {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>} 
    
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