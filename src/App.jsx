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
  const [municipi, setMunicipi] = useState('');


  useEffect(() => {
    fetch('http://localhost:3050/data.json')
      .then(response => response.json())
      .then(data => {
        const { dades, municipi, total_registres } = data;
        const dadesDTO = dades.map(d => new DadesDTO(d));
        setData(dadesDTO);
        setMunicipi(municipi);
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])


  //filter (typeOf FilterDTO)
  const onFilterChanged = (filter) => {
    console.log('filter', filter);
  }


  return (
    <>
      <h1>Dades demogràfiques</h1>
      {municipi && <h2>Municipi analitzat: {municipi}</h2>}
      <Filter onFilterChanged={onFilterChanged} />
      {data && data.length > 0 && <Table list={data} />}
    </>
  )
}

App.propTypes = {};

export default App
