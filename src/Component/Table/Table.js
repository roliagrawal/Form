import React, { Component } from 'react';
import './Table.css';

const Table = (props) => {
  const {name, data, columns, selectedRow, onClickRow} = props;
  let row;
  let datum;
  let key;
  let style;
  const columnsTable = columns.map(column => <th key={column}>{column}</th>);
  const body = data.map((rowData, i) => {
    const handleClickRow = () => {
      onClickRow(rowData.Id);
    }
    row = [];
    style = {
      background: rowData.Id === selectedRow ? '#00afec' : 'white',
      color: rowData.Id === selectedRow ? 'white' : 'black'
    }
    for (let col in columns) {
      datum = rowData[columns[col]];
      key = i + "-" + col;
      row.push (<td key={key}>{datum}</td>)
    }
    return <tr key={i} style={style} onClick={handleClickRow}>{row}</tr>
  });
  return (
    <div className="TableContainer">
    <table name={name} className="Table">
      <thead key="thead">
        <tr>{columnsTable}</tr>
      </thead>
      <tbody key="tbody">{body}</tbody>
    </table>
    </div>
  );
}

export default Table;
