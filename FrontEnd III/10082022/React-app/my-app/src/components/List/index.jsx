import React from 'react';
import Animal from '../Animal';

const List = ({labels}) =>{
    return(
        <div className="animales">
            {labels.map((animal)=> (
            <div className="animal">
                  <h2>Nombre: {animal.name}</h2>
                  <Animal info={animal.info}/>  
            </div>
            ))
            }  
        </div>
    );
};
export default List