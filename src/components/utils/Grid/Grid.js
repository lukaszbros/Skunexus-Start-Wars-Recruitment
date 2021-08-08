import './Grid.css';
import { Button, List } from 'reactstrap';

function Grid({data: {header = [], types = [], values = [], actions = []}}) {
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
            {header.map((colName, colIndex) => <td key={colName} className={types[colIndex]} >{row[colName]}</td>)}
            {!!actions.length && 
              <td className='gridActions'>
                <List type="unstyled">
                {actions.map(({label, action, hide}) => 
                  hide && hide(row) ? (null) : (<li key={label}><Button onClick={() => action(row)} color="primary">{label}</Button></li>))}
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
