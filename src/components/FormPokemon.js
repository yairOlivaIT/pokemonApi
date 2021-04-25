import React , { useState } from 'react';

const FormPokemon = ({setSearch , setLoading , setError}) => {

    const [ pokemon , setPokemon ] = useState('');


    const onSubmitPokemon = e => {
        e.preventDefault();
  
        if(pokemon.trim() === ''){
            setSearch('');
            setError(true);
            return;
        }
  
        setError(false);
        setSearch(pokemon);
        setLoading(true);
    }

    return (  
        <div className="max-w-lg mx-auto">
            <form 
                id="formulario"
                onSubmit = {onSubmitPokemon}    
            >

                <div className="flex flex-wrap text-sm font-medium  justify-center">
                    <div className="flex flex-row space-x-2 justify-center">
                        <input 
                            className="flex items-center justify-center rounded-md p-3 md:w-96 w-64 placeholder-gray-400"
                            type="text"
                            onChange = {e => setPokemon(e.target.value)}
                            placeholder = "search pokemon"
                        />
                        <input 
                            className="md:w-24 w-20 flex items-center justify-center rounded-md bg-gray-700 text-white cursor-pointer"
                            type="submit"
                            value="Search"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default FormPokemon;