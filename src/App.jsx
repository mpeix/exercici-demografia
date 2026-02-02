import { useState, useEffect } from 'react'


//Models
import DadesDTO from './model/dadesDTO'

//Components
import Filter from './components/Filter'
import Table from './components/Table'

//Styles
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [municipi, setMunicipi] = useState('');
  const [sortKey, setSortKey] = useState('NameAsc');


  const SORT_OPTIONS = [
    {value: "NameAsc", label: "Nom (A -> Z)"},
    {value: "NameDesc", label: "Nom (Z -> A)"}
  ]
  const sortStrategies = {
    NameAsc: (arr) => [...arr].sort((a,b) => a.cognom.localeCompare(b.name)),
    NameDesc: (arr) => [...arr].sort((a,b) => b.cognom.localeCompare(a.name)),

  }

const orderedData = sortStrategies[sortKey](filterData);


  useEffect(() => {
    fetch('http://localhost:3050/data.json')
      .then(response => response.json())
      .then(data => {
        const { dades, municipi, total_registres } = data;
        const dadesDTO = dades.map(d => new DadesDTO(d));
        setData(dadesDTO);
        setFilterData(dadesDTO);
        setMunicipi(municipi);
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  //filter (typeOf FilterDTO)
  const onFilterChanged = (filter) => {
  console.log('filter', filter);
  const filterData = data.filter((d) => d.cognom.includes(filter.searchTerm));
  setFilterData(filterData)
}

  


  return (
    <>
    <main>
      <div>
        <label htmlFor='filtre'>Ordenar:</label> 
        <select id='filtre' value={sortKey} onChange={(ev) => setSortKey(ev.target.value)}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </main>
      <h1>Dades demogràfiques</h1>
      {municipi && <h2>Municipi analitzat: {municipi}</h2>}
      <Filter onFilter={onFilterChanged} />
      {data && data.length > 0 && <Table list={orderedData} />}
    </>
  )
}

App.propTypes = {};

export default App
