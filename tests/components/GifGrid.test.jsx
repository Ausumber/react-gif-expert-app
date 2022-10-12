import {render, screen} from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//De esta forma creamos un mock completo de lo que haya en el path.
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid.jsx', () => {
    
    const category = 'HUSKY';

    test('Debe mostrar el loading inicialmente.', () => {
        
        //Es NECESARIO "inicializar" el mock para que las pruebas fallen. Aquí controlaremos el supuesto objeto que devolvería 
        //depediendo del estado del componente. Como aquí se está renderizando, todavía no devuelve imágenes y devuelve el isLoading como true.
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan las imágenes mediante el useFetchGifs.', () => {
        
        /*
        Vamos a hacer un mock completo del hook personalizado useFetchGifs, es decir, vamos a simular
        que el hook va a retornar el valor que queramos.
        */

        //Creamos un objeto que usaremos como suposición de lo que devuelve el useFecthGifs. Es decir, son nuestras imágenes.
        const gifs = [
            {
                id: 'ABC',
                title: 'HUSKY',
                url: 'https://husky.com'
            },
            {
                id: '123',
                title: 'Gatos',
                url: 'https://gatos.com'
            }
        ]
        
        //Cuando ya tenemos imágenes, el isLoading es false y las imágenes como un objeto, en este caso, gifs.
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});