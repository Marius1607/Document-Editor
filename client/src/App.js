import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    if (apiUrl) {
      fetch(`${apiUrl}/api/test`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setMessage(data.message);
        })
        .catch(error => console.error('Error fetching message:', error));
    }
  }, []);

  return (
    <div className="App">
      <h1>Message from the Server:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
