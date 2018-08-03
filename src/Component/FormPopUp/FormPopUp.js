import React, { Component } from 'react';
import Popup from 'react-popup';
import './Form.css';

class FormPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = column => (e) => {
    this.setState({[column]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  columnsInput = () => this.props.columns.map(column =>
    (<label>
    {column}
    <input key={column + 'input' } type="text" name={column} onChange={this.handleChange(column)}/>
    </label>)
  );
  
  handleCancel = () => {
    this.setState({});
    this.props.onCancel();
  }
  formError = () => (this.props.formError ? <div className='formError'>
      {this.props.formError}
    </div>: null)

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          {this.columnsInput()}
          <input type="submit"/>
          <input type="button" value="Cancel" onClick={this.handleCancel}/>
        </form>
        {this.formError()}
      </div>
    );
  }
}

export default FormPopUp;
