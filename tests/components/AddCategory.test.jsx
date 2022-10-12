import {render, screen, fireEvent} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory.jsx', () => {
    
    test('Debe cambiar el valor de la caja de texto.', () => {
        
        render(<AddCategory onNewCategory={() => {}}/>); //Mandamos una función vacía como argumento ya que es obligatoria en el componente por las propTypes.

        //Para disparar un evento, primero necesito la referencia al input.
        const input = screen.getByRole('textbox');

        /*Disparamos el evento. El primer argumento es el elemento sobre el que se dispara el evento,
        y el segundo es el parámetro que se pasa a la función del input.
        */
        fireEvent.input(input, {target: {value: 'HUSKY'}});

        expect(input.value).toBe('HUSKY');

    });

    test('Debe llamar onNewCategory si el input tiene un valor.', () => {
        
        const inputValue = 'HUSKY';
        const onNewCategory = jest.fn(); //Función de jest.

        render(<AddCategory onNewCategory={onNewCategory}/>);

        //Para disparar un evento, primero necesito la referencia al input.
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        /*Disparamos el evento. El primer argumento es el elemento sobre el que se dispara el evento,
        y el segundo es el parámetro que se pasa a la función del input.
        Así rellenamos el formulario antes de hacer submit.
        */
        fireEvent.input(input, {target: {value: 'HUSKY'}});

        //Disparamos el submit.
        fireEvent.submit(form);

        //Tras el submit, el input debería estar vacío.
        expect(input.value).toBe('');

        /*
        Hay que evaluar que, tras hacer submit, la función onNewCategory haya sido llamada
        con el valor del input.
        Para ello vamos a utilizar las jest functions. Son una simulación de funciones en las
        que tenemos el control absoluto de la función.
        */
        expect(onNewCategory).toHaveBeenCalled(); //Comprobamos que haya sido llamada.
        //O también podemos indicar las veces que esperamos que se le llame:
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //Que haya sido llamado con el valor del inputValue:
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('No debe llamar a onNewCategory si el input tiene un valor vacío.', () => {
        
        const onNewCategory = jest.fn(); //Función de jest.
        render(<AddCategory onNewCategory={onNewCategory}/>);

        //Para disparar el submit, primero necesito la referencia al form.
        const form = screen.getByRole('form');

        //Disparamos el submit.
        fireEvent.submit(form);

        //Como el inputValue está vacío, no debería llamar a onNewCategory ninguna vez.
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        //O también:
        expect(onNewCategory).not.toHaveBeenCalled();

    });

});