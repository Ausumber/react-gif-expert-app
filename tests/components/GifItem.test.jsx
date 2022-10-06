import { GifItem } from "../../src/components/GifItem";
import {render, screen} from '@testing-library/react';

describe('Pruebas en GifItem.jsx', () => {
    
    const title = 'HUSKY';
    const url = 'https://husky.com';

    test('Debe hacer match con el snapshot.', () => {
        
        const {container} = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar la imagen con el URL y el ALT indicado.', () => {
        
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //console.log(screen.getByRole('img'));
        const {src, alt} = screen.getByRole('img');

        expect(src).toContain(url);
        expect(alt).toBe(title);

    });

    test('Debe mostrar el título en el componente.', () => {
        
        render(<GifItem title={title} url={url} />);
        expect(screen.getAllByText(title)).toBeTruthy();

    });

});