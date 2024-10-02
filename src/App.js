import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItemsByCategory from './components/DisplayItemsByCategory';
import DisplayAllItems from './components/DisplayAllItems';

function App() {
  const [inventory, setInventory] = useState([]);

  // Add Item
  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  // Update Item
  const updateItem = (id, field, newValue) => {
    const updatedInventory = inventory.map(item => {
      if (item.id === id) {
        return { ...item, [field]: newValue };
      }
      return item;
    });
    setInventory(updatedInventory);
  };

  // Remove Item
  const removeItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h4>Add New Item</h4>
          <AddItem onAddItem={addItem} />
        </Col>
        <Col md={4}>
          <h4>Update Item</h4>
          <UpdateItem inventory={inventory} onUpdateItem={updateItem} />
        </Col>
        <Col md={4}>
          <h4>Remove Item</h4>
          <RemoveItem inventory={inventory} onRemoveItem={removeItem} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <DisplayItemsByCategory inventory={inventory} />
        </Col>
        <Col md={6}>
          <DisplayAllItems inventory={inventory} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;