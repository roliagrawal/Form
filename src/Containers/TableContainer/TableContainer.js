import React, { Component } from 'react';
import Table from '../../Component/Table/Table';
import Button from '../../Component/Button/Button';
import FormPopUp from '../../Component/FormPopUp/FormPopUp';
import { connect } from 'react-redux';
import {deleteRow, addRow} from './reducer';

const columns = ['Name', 'Email', 'Phone', 'Company' ];
class TableContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedRow: null,
      showPopUp: false,
      formError: '',
    };
  }

  handleOnClick = (rowIndex) => {
    this.setState({ selectedRow: rowIndex });
  }

  handleDelete = () => {
    if (this.state.selectedRow) {
      this.props.deleteRow(this.state.selectedRow);
    }
  }
  handleAdd = () => {
    this.setState({ showPopUp: true });
  }
  handleCancel = () => {
    this.setState({ showPopUp: false });
  }
  handleOnSubmit = (data) => {
    let result = true;
    for (let i=0; i < columns.length; i++) {
    if (!data[columns[i]]) {
      result = false;
      break;
      }
    }
    if (result) {
      this.props.addRow(data);
      this.setState({ showPopUp: false });
    } else {
      this.setState({ formError: 'values are missing' });
    }
  }
  render() {
    return (
    <React.Fragment>
      <Button onDelete={this.handleDelete} onAdd={this.handleAdd}/>
      <Table
        data={this.props.data}
        columns={columns}
        name="displayTable"
        selectedRow={this.state.selectedRow}
        onClickRow={this.handleOnClick}
      />
      {this.state.showPopUp ? <FormPopUp
        columns={columns}
        onSubmit={this.handleOnSubmit}
        formError={this.state.formError}
        onCancel={this.handleCancel}
        /> : null}
   </React.Fragment>
  );
  }
}

const mapStateToProps = state => ({
  data: state
});
const mapDispatchToProps = dispatch => ({
  deleteRow: id => dispatch(deleteRow(id)),
  addRow: data => dispatch(addRow(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
