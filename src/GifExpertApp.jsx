import { useState } from "react";
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";
import {AddCategory, GifGrid} from "./components"; //Esto busca directamente en el archivo de barril (index.js).

export const GifExpertApp = () => {

    /*
    Para almacenar información que deba cambiar el HTML, lo usual es utilizar hooks para mantener el estado, como el useState.
    NO es para nada recomendable meter hooks dentro de ifs o similares, ya que React da un número consecutivo a cada uno
    para diferenciarlos.
    */
    const [categories, setCategories] = useState(['HUSKY']); //Inicializamos con un array.
    //console.log(categories);

    const onAddCategory = (newCategory) => {

        //Vamos a evitar usar el push() para añadir objetos a los arrays ya que el push() lo que hace es mutar el objeto.
        //Y React precisamente trata de evitar las mutaciones, por lo que la solución es, entre otras, crear un nuevo array.
        //categories.push('Valorant');

        //Evitamos repeticiones para que no de errores de key al generear la lista.
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]); //Usamos el operador spread para crear una copia del array de categories y añadir el nuevo elemento.
        //setCategories(categories => [...categories, 'Valorant']); //Otra forma.

    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            {/* Importamos un nuevo componente, el de AddCategory. */}
            <AddCategory 
                //setCategories={setCategories}  {/*Se pueden mandar funciones como propiedades para otros componentes.*/}
                onNewCategory={onAddCategory} 
                /*Aquí lo que hace es mandar una property que contiene la función onAddCategory. 
                Por tanto, cuando se llame desde el componente AddCategory a la función de nombre onNewCategory, por encadenamiento
                llamará a la función onAddCategory
                */
            /> 

            {/* Listado de Items
                Vamos a crear un listado en base a las categories. Se creará un <li> por cada una:
            */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {/* <ol> */}
                {categories.map(category => //{//Básicamente recorres el array de categorías y devuelves un li con cada una.
                    //return //Ya que la función sólo devuelve un return, se puede omitir el return y las llaves de la función.
                    <GifGrid key={category} category={category}/>
                //}
                )}
            {/* </ol> */}
                {/* Gif Item */}
        </>
    )
}
// aRZLVTJzokvDhvzY2B5T8w7f443TA9FY