import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function UpdateItem({ inventory, onUpdateItem }) {
  const [itemId, setItemId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateItem = () => {
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
      {message && <Alert variant="success">{message}</Alert>}
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