import React, { useState } from 'react';
import { Form, Table, Button } from 'react-bootstrap';

function DisplayItemsByCategory({ inventory }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleDisplayByCategory = () => {
    const items = inventory.filter(item => item.category === selectedCategory);
    setFilteredItems(items);
  };

  return (
    <div>
      <h4>Display Items by Category</h4>
      <Form>
        <Form.Group controlId="formCategory">
          <Form.Label>Select Category</Form.Label>
          <Form.Control
            as="select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleDisplayByCategory} className="mt-3">
          Display Items
        </Button>
      </Form>

      {filteredItems.length > 0 && (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default DisplayItemsByCategory;