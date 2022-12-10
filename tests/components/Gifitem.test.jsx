import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/Gifitem";


describe('Pruebas en el <Gifitem />', () => { 

    const title = 'Gines';
    const url   = 'https://one-punch.com/gines.jpg';
    

    test('debe de hacer march con el snapshot', () => { 
        
       const { container } = render( <GifItem title={ title } url={ url } /> )
        expect ( container ).toMatchSnapshot();
    });
});