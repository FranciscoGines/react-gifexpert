import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/Gifitem";


describe('Pruebas en el <Gifitem />', () => { 

    const title = 'Gines';
    const url   = 'https://one-punch.com/gines.jpg';
    

    test('debe de hacer march con el snapshot', () => { 
        
       const { container } = render( <GifItem title={ title } url={ url } /> );
        expect ( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y el alt indicado', () => { 
       
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();// aqui te muestra en la terminal lo que estamos pidiendo
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );


    });

    test('debe de mostrar el titulo en el componente', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();// con esto toBeTruthy(); comprobaremos que exista
    
    });


});