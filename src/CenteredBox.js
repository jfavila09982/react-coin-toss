import React from 'react';

const CenteredBox = () => {
  const boxStyle = {
    width: '800px',
    height: '500px',
    margin: 'auto',
    marginTop: '50px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'left',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden', // Prevent content from overflowing
    overflowY: 'auto', // Add vertical scrollbar if needed
  };

  return (
    <div style={boxStyle}>
      <h1>Your Content Goes Here</h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
};

export default CenteredBox;
