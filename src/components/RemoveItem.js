import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function RemoveItem({ inventory, onRemoveItem }) {
  const [itemId, setItemId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveItem = () => {
    const item = inventory.find(item => item.id === itemId);
    if (item) {
      onRemoveItem(itemId);
      setMessage(`Item ${item.name} has been removed from the inventory.`);
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
        <Button variant="danger" onClick={handleRemoveItem} className="mt-3">
          Remove Item
        </Button>
      </Form>
    </div>
  );
}

export default RemoveItem;