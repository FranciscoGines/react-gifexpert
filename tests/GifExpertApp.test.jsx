import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en el componente <GifExpertApp />', () => { 
    
    test('', () => { 
        
        render ( <GifExpertApp /> );
        screen.debug();
    
    });

});