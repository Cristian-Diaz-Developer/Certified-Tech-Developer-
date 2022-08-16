import React from 'react';

const Animal = ({info}) => {
    return (
        <ul>
            <li>Edad:{info.age}</li>
            <li>Sexo:{info.sex}</li>
            <li>Raza:{info.breed}</li>
            <li>Tamaño:{info.size}</li>        
        </ul>
    );
}

export default Animal 