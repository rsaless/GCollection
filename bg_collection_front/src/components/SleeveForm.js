import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SleeveForm = ({ onSubmit }) => {
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data as needed

    // Prepare sleeve data
    const sleeveData = {
      brand,
      name,
      size,
      quantity,
    };

    // Pass the sleeve data to the parent component for submission
    onSubmit(sleeveData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="brand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="size">
        <Form.Label>Size</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SleeveForm;