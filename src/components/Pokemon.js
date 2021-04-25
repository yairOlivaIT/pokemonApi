import React from 'react';

const Pokemon = ( { result }) => {
    const { name ,base_experience, sprites: {other: {dream_world: {front_default}}} } = result;
    return (  
        <div className="m-auto mt-10 container shadow-card w-96 lg:w-96">
            <figure className="bg-gradient-to-t from-yellow-400 via-red-500 to-red-700 rounded-t-lg p-8">
                <img className="w-64 h-64 rounded-full mx-auto bg-gray-200 p-2" src={front_default} alt="imagen pokemon" width="200" height="512"/>
            </figure>
                
            <div className="pt-4 tex space-y-4 bg-red-50 mb-10 rounded-b-lg">
                <p className="text-3xl text-center font-semibold capitalize">
                    {name} <span className="text-xl text-gray-500">{result.stats[0].base_stat} hp</span>
                </p>
                <p className="text-2xl text-center font-semibold text-gray-500">
                    {base_experience} exp
                </p>

                <hr className="mt-4 "></hr>
                <div className="flex flex-row justify-around text-center pb-10">
                    <figcaption className="font-medium p-4">
                        <div className="text-cyan-600">
                        {result.stats[1].base_stat}K
                        </div>
                        <div className="text-gray-500">
                            Attack
                        </div>
                    </figcaption>

                    <figcaption className="font-medium p-4">
                        <div className="text-cyan-600">
                            {result.stats[3].base_stat}K
                        </div>
                        <div className="text-gray-500">
                            Attack Special
                        </div>
                    </figcaption>

                    <figcaption className="font-medium p-4">
                        <div className="text-cyan-600">
                            {result.stats[2].base_stat}K
                        </div>
                        <div className="text-gray-500">
                            Defense
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>
    );
}
 
export default Pokemon;