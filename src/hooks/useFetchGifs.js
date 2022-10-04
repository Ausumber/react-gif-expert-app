//CUSTOM HOOK

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook tan solo es una función que retorna algo.
export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]); //Inicializa el hook de las imágenes.
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {

        setImages(await getGifs(category)); //Obtiene los gifs, que, como es una petición FETCH, hacemos un await para esperar al resultado. Llama al cambio de estado del hook.
        setIsLoading(false);

    }

    /*
    El useEffect es un hook de React que sirve para disparar efectos secundarios, como procesos, cuando algo cambie.
    La primera parte es el código que queremos ejecutar.
    El segundo argumento (opcional) indica cuando se dispara. Si se deja vacío, sólo se ejecuta la primera vez que se renderiza el componente.
    */
    useEffect(() => {
        getImages(); 
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }

}
