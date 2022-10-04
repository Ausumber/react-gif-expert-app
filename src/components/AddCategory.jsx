import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

    //Vamos a usar otro useState para controlar el cambio en el texto y recoger lo que se escribe.
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {

        //console.log(event.target.value); //Dentro del evento, en el target.value, tenemos el nuevo valor del input.
        setinputValue(event.target.value);

    }

    const onSubmit = (event) => {

        event.preventDefault(); //Evitamos la recarga de la página al hacer submit.

        if(inputValue.trim().length <= 0) return; //Evitamos que se actualice la lista si no hay carácteres.

        //Llamando directamente al setCategories pasado como prop.
        /*
        Es peor forma ya que estás sustituyendo todo el array de categories y devolviéndolo al padre, mientras que,
        de la forma de abajo, únicamente le devuelves el nuevo elemento y el el padre el que lo sustituye en la función
        que tiene para eso.
         */
        //setCategories(categories => [inputValue, ...categories]);

        /*
        Llamamos a la función onNewCategory, traída desde las props, que acaba llamando a la función
        onAddCategory del componente padre (GifExpertApp).
        */
        onNewCategory(inputValue.trim()); 

        //Limpiamos el input:
        setinputValue('');

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} //Le pasamos el evento, que siempre será el primer parámetro automático, y contiene información acerca del cambio, por ejemplo, el nuevo valor.
            />
        </form>
    )
}
