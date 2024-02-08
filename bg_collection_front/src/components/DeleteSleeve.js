import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DeleteSleeve = ({ match }) => {
  const sleeveId = match.params.id;
  const history = useHistory();

  const handleDelete = () => {
    // Send a DELETE request to delete the sleeve on the backend
    // Example: fetch(`/api/sleeves/${sleeveId}`, { method: 'DELETE' })
    //   .then(response => {
    //     // Handle the response
    //   })
    //   .catch(error => console.error('Error:', error));

    // For demonstration, logging a success message
    console.log('Sleeve deleted successfully');

    // Redirect to the sleeves list page after deleting
    history.push('/sleeves/all');
  };

  return (
    <div>
      <h2>Delete Sleeve</h2>
      <p>Are you sure you want to delete this sleeve?</p>
      <Button variant="danger" onClick={handleDelete}>
        Yes, Delete
      </Button>
      <Button variant="secondary" onClick={() => history.push(`/sleeves/${sleeveId}`)}>
        Cancel
      </Button>
    </div>
  );
};

export default DeleteSleeve;