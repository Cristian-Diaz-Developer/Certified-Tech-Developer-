import React from 'react'

export const List = ({listAnimals}) => {
  return (
    <>
      {listAnimals.map((animal)=>{
        return(
          <div>
            <h2>Nombre: {animal.name}</h2>
            <ul style={{listStyle:'none'}}>
                <li>Edad : {animal.age}</li>
                <li>Sexo : {animal.sex}</li>
                <li>Raza : {animal.breed}</li>
                <li>Tamaño : {animal.size}</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}
