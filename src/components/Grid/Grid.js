import './Grid.css';
import { Button, List } from 'reactstrap';

function Grid({data: {header = [], values = [], actions = []}}) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            {!!actions.length && 
              <td className='gridActions'>
                <List type="unstyled">
                {actions.map(({label, action}) => <li><Button key={label} onClick={() => action(row)} color="primary">{label}</Button></li>)}
                </List>
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
