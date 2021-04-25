import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import FormPokemon from './components/FormPokemon';
import Pokemon from './components/Pokemon';

function App() {
  
  const [ search , setSearch ] = useState('');
  const [ result  , setResult ] = useState([]);
  const [ loading , setLoading ] = useState(false);
  const [ error , setError ] = useState(false);

  useEffect(() => {
    
    const consultarApi = async () => {
      try {
        let buscador = search.toLowerCase()
        if ( search.trim() === '') {
          setResult([]);
          return
        }

        const url = `https://pokeapi.co/api/v2/pokemon/${buscador}`;
        const response = await axios.get(url);
        setResult(response.data);
        console.log(response.data);
        setError(false);
        setLoading(false);
      
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
  
    consultarApi();
  
  },[search]);



  return (
    <div className="App">
      <Header/>
      <FormPokemon 
        setSearch = {setSearch}
        setLoading = {setLoading}
        setError = { setError }
      />
      { error 
        ?
        <div class="w-96 m-auto mt-20 bg-red-100  border-t-4 border-b-4 border-red-500 text-red-700 px-4 py-3" role="alert">
          <p class="font-bold text-center">Pokemon not found</p>
        </div>
        :
        null
      }

      {loading
        ? 
          <>
            <div className="flex justify-center mt-16">
              <p className="loading">Loading...<span className="span">&#160;</span></p>
            </div>
            <div className="sk-circle">
              <div className="sk-circle1 sk-child"></div>
              <div className="sk-circle2 sk-child"></div>
              <div className="sk-circle3 sk-child"></div>
              <div className="sk-circle4 sk-child"></div>
              <div className="sk-circle5 sk-child"></div>
              <div className="sk-circle6 sk-child"></div>
              <div className="sk-circle7 sk-child"></div>
              <div className="sk-circle8 sk-child"></div>
              <div className="sk-circle9 sk-child"></div>
              <div className="sk-circle10 sk-child"></div>
              <div className="sk-circle11 sk-child"></div>
              <div className="sk-circle12 sk-child"></div>
            </div>
          </>
          : null }
          
        {
          result.length === 0 ? null
          :
          <Pokemon 
            result = { result }
          />
        }     
    </div>
  );
}

export default App;
