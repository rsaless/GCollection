import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SleeveForm from '../components/SleeveForm';

const EditSleeve = ({ match }) => {
  const sleeveId = match.params.id;
  const [sleeveData, setSleeveData] = useState({});
  const history = useHistory();

  useEffect(() => {
    // Fetch sleeve data based on sleeveId and set it to sleeveData state
    // You can use a GET request to your backend endpoint for fetching the sleeve details
    // Example: fetch(`/api/sleeves/${sleeveId}`)
    //   .then(response => response.json())
    //   .then(data => setSleeveData(data))
    //   .catch(error => console.error('Error:', error));

    // For demonstration, initializing with sample data
    setSleeveData({
      brand: 'Sample Brand',
      name: 'Sample Sleeve',
      size: 'Standard',
      quantity: 50,
      // Add other sleeve properties
    });
  }, [sleeveId]);

  const handleUpdate = (updatedSleeveData) => {
    // Send a PUT request to update the sleeve on the backend
    // Example: fetch(`/api/sleeves/${sleeveId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedSleeveData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the updated sleeve data
    //   })
    //   .catch(error => console.error('Error:', error));

    // For demonstration, logging the updated sleeve data
    console.log('Updated Sleeve Data:', updatedSleeveData);

    // Redirect to the sleeve details page after updating
    history.push(`/sleeves/${sleeveId}`);
  };

  return (
    <div>
      <h2>Edit Sleeve</h2>
      <SleeveForm onSubmit={handleUpdate} initialValues={sleeveData} />
      <Button variant="danger" onClick={() => history.push(`/sleeves/${sleeveId}`)}>
        Cancel
      </Button>
    </div>
  );
};

export default EditSleeve;