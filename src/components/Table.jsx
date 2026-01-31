import {arrayOf, instanceOf} from 'prop-types';
import DadesDTO from '../model/dadesDTO';

function Table({ list }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Cognom</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {list?.map(({cognom, total}, index) => (
          <tr key={index}>
            <td>{cognom}</td>
            <td>{total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  list: arrayOf(instanceOf(DadesDTO))
};

export default Table;
