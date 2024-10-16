import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

function SortItems({ inventory }) {
  const [sortField, setSortField] = useState('quantity');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sortedItems, setSortedItems] = useState([...inventory]);

  const handleSort = () => {
    const sorted = [...inventory].sort((a, b) => {
      const fieldA = parseFloat(a[sortField]);
      const fieldB = parseFloat(b[sortField]);

      if (sortOrder === 'ascending') {
        return fieldA - fieldB;
      } else {
        return fieldB - fieldA;
      }
    });
    setSortedItems(sorted);
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Sort by</Form.Label>
        <Form.Control
          as="select"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Order</Form.Label>
        <Form.Control
          as="select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </Form.Control>
      </Form.Group>
      <Button className="mt-2" onClick={handleSort}>Sort</Button>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SortItems;