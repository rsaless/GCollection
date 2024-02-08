import React, { useState, useEffect } from 'react';
import SleeveList from '../components/SleeveList';
import SleeveDetails from '../components/SleeveDetails';
import SleeveForm from '../components/SleeveForm';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SleevesPage = () => {
  const [sleeves, setSleeves] = useState([]);
  const [selectedSleeve, setSelectedSleeve] = useState(null);

  useEffect(() => {
    // Fetch sleeves from the backend API
    // Replace this with your actual API call
    // For simplicity, we're using a sample array here
    const sampleSleeves = [
      { id: 1, brand: 'Brand 1', size: 'Standard' },
      { id: 2, brand: 'Brand 2', size: 'Mini' },
      { id: 3, brand: 'Brand 3', size: 'Large' },
    ];
    setSleeves(sampleSleeves);
  }, []);

  const handleSleeveSelect = (sleeve) => {
    setSelectedSleeve(sleeve);
  };

  const handleAddSleeve = async (newSleeveData) => {
    try {
      // Make a POST request to your backend API to add a new sleeve
      const response = await fetch('http://your-backend-api/sleeves/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSleeveData),
      });

      if (response.ok) {
        // Update the frontend state with the new sleeve
        const newSleeve = await response.json();
        setSleeves((prevSleeves) => [...prevSleeves, newSleeve]);
      } else {
        console.error('Failed to add a new sleeve.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditSleeve = async (editedSleeveData) => {
    try {
      // Make a PUT request to your backend API to edit the selected sleeve
      const response = await fetch(
        `http://your-backend-api/sleeves/edit/${selectedSleeve.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedSleeveData),
        }
      );

      if (response.ok) {
        // Update the frontend state with the edited sleeve
        const updatedSleeve = await response.json();
        setSleeves((prevSleeves) =>
          prevSleeves.map((sleeve) =>
            sleeve.id === updatedSleeve.id ? updatedSleeve : sleeve
          )
        );
        setSelectedSleeve(updatedSleeve);
      } else {
        console.error('Failed to edit the sleeve.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteSleeve = async () => {
    try {
      // Make a DELETE request to your backend API to delete the selected sleeve
      const response = await fetch(
        `http://your-backend-api/sleeves/delete/${selectedSleeve.id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        // Update the frontend state by removing the deleted sleeve
        setSleeves((prevSleeves) =>
          prevSleeves.filter((sleeve) => sleeve.id !== selectedSleeve.id)
        );
        setSelectedSleeve(null);
      } else {
        console.error('Failed to delete the sleeve.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h1>Sleeve Collection App</h1>
          <SleeveList sleeves={sleeves} onSleeveSelect={handleSleeveSelect} />
        </Col>
        <Col xs={6}>
          <SleeveDetails sleeve={selectedSleeve} />
          <SleeveForm onSubmit={handleAddSleeve} />
          {selectedSleeve && (
            <div>
              <Button onClick={handleEditSleeve}>Edit Sleeve</Button>
              <Button variant="danger" onClick={handleDeleteSleeve}>
                Delete Sleeve
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SleevesPage;