import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import CoffeeList from './CoffeeList.js'
import Admin from './Admin.js'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Coffee Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
            <Form inline>
              <div className="d-flex">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" className="mx-1">Search</Button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<CoffeeList />} />
          <Route index element={<CoffeeList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;