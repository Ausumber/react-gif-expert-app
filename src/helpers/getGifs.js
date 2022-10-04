export const getGifs = async(category) => {

    //Genero la url con mi API_KEY y pasándole como parámetro q la category.
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aRZLVTJzokvDhvzY2B5T8w7f443TA9FY&q=${category}&limit=10`;

    //Llamada a la url.
    const resp = await fetch(url); //Con el await, espera a que el fetch finalice.

    //El data contiene las imagenes, y las obtenemos del json de la respuesta.
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);

    return gifs;

}