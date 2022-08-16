import List from "./components/List";

function App (){
    const animalNames =[
        {
            name: "Pepito",
            info:{
                age: 5,
                breed: "Husky",
                sex: "Macho",
                sixe: "Grande"
            },
        },
        {
            name: "Chandita",
            info:{
                age: 9,
                breed: "Criollo",
                sex: "Hembra",
                sixe: "pequeño"
            },
        },
        {
            name: "Simon",
            info:{
                age: 12,
                breed: "Caniche",
                sex: "Macho",
                sixe: "pequeño"
            },
        },
        {
            name: "Panchita",
            info:{
                age: 1,
                breed: "Labrador",
                sex: "Hembra",
                sixe: "Mediano"
            },
        }
    ];
    return(
        <>
        <h1>Clientes de veterinaria</h1>
        <List Labels= {animalNames}/>
        </>
    );
}   

export default App;