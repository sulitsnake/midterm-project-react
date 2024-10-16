import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function UpdateItem({ inventory, onUpdateItem }) {
  const [itemId, setItemId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str); //regex for ID

  const handleUpdateItem = () => {
    if (!isAlphanumeric(itemId)) {
      setMessage('ID should only contain letters (A-Z) and numbers (0-9).');
      return; 
    } //regex validation

    //checks if new value isn't null or empty.
    if (newValue === '' || newValue === null || isNaN(newValue)) {
      setMessage('Please enter a valid value.');
      return;
    }


    /*validation for negative price or quantity*/
    if (field === 'quantity' || field === 'price') {
      if (newValue < 0) {
        setMessage(`${field.charAt(0).toUpperCase() + field.slice(1)} cannot be negative.`);
        return;
      }
    }

    const item = inventory.find(item => item.id === itemId);
    if (item) {
      const oldValue = item[field];
      onUpdateItem(itemId, field, newValue);
      setMessage(`The ${field} of item ${item.name} has been updated from ${oldValue} to ${newValue}`);
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div>
      {message && <Alert variant="danger">{message}</Alert>}
      <Form>
        <Form.Group controlId="formItemId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item ID"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formField">
          <Form.Label>Field</Form.Label>
          <Form.Control
            as="select"
            value={field}
            onChange={(e) => setField(e.target.value)}
          >
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formNewValue">
          <Form.Label>New Value</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter new value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleUpdateItem} className="mt-3">
          Update Item
        </Button>
      </Form>
    </div>
  );
}

export default UpdateItem;