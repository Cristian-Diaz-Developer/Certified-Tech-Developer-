import React from "react";
import './styles.css'

const List = ({ data }) => {
  return (
    <>
      <h1>Lista hola mundo</h1>
      {data.map((item, index) => {
        return (
          <div>
            <ul  style={{listStyle:'none'}}>
              <li className="items" key={index}>{item}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default List;
