import { useState } from 'react';
import PropTypes from 'prop-types';

import FilterDTO from '../model/filterDTO';

function Filter({ onFilter }) {
  const [filter, setFilter] = useState(new FilterDTO());

  const handleSearchTermChange = (e) => { setFilter(prev => new FilterDTO({ ...prev, searchTerm: e.target.value })); }

 const onFilterClick = () => { onFilter(filter); }

  return (
    <div className="mb-3">
      <input type="text" className="form-control d-inline-block me-2" style={{ width: '200px' }}
        value={filter?.searchTerm || ""} onChange={handleSearchTermChange} />
      <button type="button" className="btn btn-primary" onClick={onFilterClick}>Filter</button>
    </div>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func
};

export default Filter;
