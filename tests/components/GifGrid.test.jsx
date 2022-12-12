import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en mi <GifGrid />', () => { 

    const category = 'One Punch';
    //Prueba 1
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({

            images: [],
            isLoading: true
        });
        
        render( <GifGrid  category={ category } /> );
        // screen.debug();
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid  category = { category } /> );
        //screen.debug();
        expect( screen.getAllByRole('img').length).toBe(2);// esta opcione  spara imprimir si tenememos varias imagenes
       


    });

});