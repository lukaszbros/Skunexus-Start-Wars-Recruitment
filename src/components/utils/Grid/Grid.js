import './Grid.css';
import { Button, List } from 'reactstrap';
import PropTypes from 'prop-types';

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
            {header.map((colName, colIndex) => <td key={colName} className={types[colIndex]} >{types[colIndex] === 'count' ? row[colName].length : row[colName]}</td>)}
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

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string).isRequired,
    types: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
      hide: PropTypes.func
      }))
  })
}

export default Grid;
