import Data from './Data.json';
export function deleteRow(id) {
  return {
    type: 'DELETE',
    id,
  }
}
export function addRow(data) {
  debugger;
  return {
    type: 'ADD',
    data,
  }
}
const todos = (state = Data, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          Id: state.length + 1,
          Name: action.data.Name,
          Email: action.data.Email,
          Phone: action.data.Phone,
          Company: action.data.Company,
        }
      ]
    case 'DELETE':
      return state.filter(row => !(row.Id === action.id));
    default:
      return state
  }
};

export default todos;
