import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]); //Inicializa el hook de las imágenes.

    // const getImages = async() => {

    //     setImages(await getGifs(category)); //Obtiene los gifs, que, como es una petición FETCH, hacemos un await para esperar al resultado. Llama al cambio de estado del hook.

    // }

    // /*
    // El useEffect es un hook de React que sirve para disparar efectos secundarios, como procesos, cuando algo cambie.
    // La primera parte es el código que queremos ejecutar.
    // El segundo argumento (opcional) indica cuando se dispara. Si se deja vacío, sólo se ejecuta la primera vez que se renderiza el componente.
    // */
    // useEffect(() => {
    //     getImages(); 
    // }, [])
    
    //Vamos a hacer el mismo código de arriba pero utilizando un CUSTOM HOOK.
    const {images, isLoading} = useFetchGifs(category);
    console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando</h2>)
            }
            <div className="card-grid"> {/*className es el sustituto del atributo HTML class en React.*/}
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            // title={image.title}
                            // url={image.url}
                            {
                                /*Esta es otra forma de pasarle elementos a un componente. Utilizando el operador spread,
                                le pasamos todas las propiedades que contenga. */
                                ...image
                                
                            }
                        />
                    ))
                }
            </div>
        </>
    )

}
