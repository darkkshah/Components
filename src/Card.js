import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}
    >
      <h2 style={{ marginBottom: '10px' }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;

