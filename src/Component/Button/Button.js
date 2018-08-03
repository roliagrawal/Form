import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
  const handleDelete = () => {
    props.onDelete();
  }
  const handleAdd = () => {
    props.onAdd();
  }
  return (
    <div className="Button">
      <button onClick={handleAdd}> Add </button>
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
}

export default Button;
