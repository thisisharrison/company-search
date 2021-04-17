import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import * as API from './util/company_api_util';

function App() {
  const [companies, setCompanies] = useState([]);
  const [errors, setErrors] = useState([]);
  
  useEffect(() => {
    API.fetchAllCompanies().then((res) => {
      setCompanies(res.data)
    })
    .catch(err => setErrors(err))
  }, [])
  return (
    <>
      Companies
      <pre>{JSON.stringify(companies, undefined, 2)}</pre>
      Errors
      <pre>{JSON.stringify(errors.message, undefined, 2)}</pre>
    </>
  );
}

export default App;
