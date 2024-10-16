import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import RemoveItem from './RemoveItem';
import DisplayItemsByCategory from './DisplayItemsByCategory';
import DisplayAllItems from './DisplayAllItems';
import SearchItem from './SearchItem';
import SortItems from './SortItems';
import LowStockItems from './LowStockItems'; 
import '../styles/globalstyle.css';

function InventoryApp() {
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
    <div>
    <div className="header-container">
      <h1 className="header">INVENTORY</h1>
    </div>


    <div className="main-container">
      <Tab.Container id="horizontal-tabs" defaultActiveKey="addItem">
        <Row>
          <Col>
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="addItem">Add Item</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="updateItem">Update Item</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="removeItem">Remove Item</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="displayByCategory">Display by Category</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="displayAll">Display All Items</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="searchItem">Search Item</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sortItems">Sort Items</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="lowStockItems">Low Stock Items</Nav.Link> 
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="addItem">
                <AddItem onAddItem={addItem} inventory={inventory} />
              </Tab.Pane>
              <Tab.Pane eventKey="updateItem">
                <UpdateItem inventory={inventory} onUpdateItem={updateItem} />
              </Tab.Pane>
              <Tab.Pane eventKey="removeItem">
                <RemoveItem inventory={inventory} onRemoveItem={removeItem} />
              </Tab.Pane>
              <Tab.Pane eventKey="displayByCategory">
                <DisplayItemsByCategory inventory={inventory} />
              </Tab.Pane>
              <Tab.Pane eventKey="displayAll">
                <DisplayAllItems inventory={inventory} />
              </Tab.Pane>
              <Tab.Pane eventKey="searchItem">
                <SearchItem inventory={inventory} />
              </Tab.Pane>
              <Tab.Pane eventKey="sortItems">
                <SortItems inventory={inventory} />
              </Tab.Pane>
              <Tab.Pane eventKey="lowStockItems">
                <LowStockItems inventory={inventory} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
    </div>
  );
}

export default InventoryApp;