import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function SearchItem({ inventory }) {
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundItem = inventory.find(item => item.id === searchId);
    if (foundItem) {
      setResult(foundItem);
    } else {
      setResult('Item not found!');
    }
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Search by ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Item ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </Form.Group>
      <Button className="mt-2" onClick={handleSearch}>Search</Button>

      {result && (
        typeof result === 'string' 
        ? <Alert variant="danger">{result}</Alert>
        : <Alert variant="success">
            <p>ID: {result.id}</p>
            <p>Name: {result.name}</p>
            <p>Category: {result.category}</p>
            <p>Quantity: {result.quantity}</p>
            <p>Price: {result.price}</p>
          </Alert>
      )}
    </div>
  );
}

export default SearchItem;