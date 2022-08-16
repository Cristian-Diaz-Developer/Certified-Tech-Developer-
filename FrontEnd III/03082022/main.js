const enStock = ["Manzana", "Pera", "Naranja", "Banana", "Kiwi"];
  const enFalta = ["Durazno", "Cereza", "Anana"];

  function Lista(props) {
      return (
          <ul>
              { props.lista.map((elemento, i) => <li key={"li-" + i}>{elemento}</li>) }
          </ul>
      );
  }
  
  function ProductosVerduleria(props) {
    return (
      <>
          <h1>Lista de Productos en stock:</h1>
          <Lista lista={enStock}/>
          <h2>Productos en falta:</h2>
          <Lista lista={enFalta} />
      </>
    );
  }

  ReactDOM.render(
      <ProductosVerduleria/>,
      document.querySelector("#root")
  );