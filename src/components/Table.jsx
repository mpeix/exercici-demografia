import {arrayOf, instanceOf} from 'prop-types';
import DadesDTO from '../model/dadesDTO';

function Table({ list }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Cognom</th>
          <th>Total</th>
          <th>Dones</th>
          <th>Homes</th>
        </tr>
      </thead>
      <tbody>
        {list?.map(({cognom, total, dones, homes}, index) => (
          <tr key={index}>
            <td>{cognom}</td>
            <td>{total}</td>
            <td>{dones}</td>
            <td>{homes}</td>
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
