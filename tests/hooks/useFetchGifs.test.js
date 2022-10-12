import {renderHook, waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

/*
Los hooks no pueden evaluarse de manera aislada, si no que deben ejecutarse dentro de un functional
component. Para poder ejecutarlo en los tests, se utiliza la función renderHook.
*/
describe('Pruebas en el Hook useFetchGifs.js', () => {
    
    test('Debe retornar el estado inicial.', () => {
        
        const {result} = renderHook( () => useFetchGifs('HUSKY') );
        
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Debe retornar un array de imágenes y el isLoading en false.', async() => {
        
        const {result} = renderHook( () => useFetchGifs('HUSKY') );
        
        //La función waitFor espera a que ocurra algo y es asíncrona. En este caso, le indicamos 
        //que espere a que el length de las imágenes sea superior a 0.
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

});