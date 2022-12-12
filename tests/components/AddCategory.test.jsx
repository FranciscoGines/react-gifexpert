import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'


describe('Pruebas en <AddCategory />', () => { 
    // Prueba 1
    test('debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory = { () => {} } />  );// Creamos sugeto de pruebas
        const input = screen.getByRole('textbox');// aqui extraemos el input el cual tiene una relacion directa con screen.getByRole

        fireEvent.input( input, { target: { value: 'Gines' } } );// disparamos aqui el evento

        expect ( input.value ).toBe('Gines');// aqui hacemos la sercion de lo que estamos esperando.

        // screen.debug();
         
    });

    //Prueba 2
    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue    = 'Gines';
        const onNewCategory = jest.fn();// esto es una jest funcion llamada jest-Mock
        
        render( <AddCategory onNewCategory = { onNewCategory } />  );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect ( onNewCategory ).toHaveBeenCalled();// con esta prueba solo me dice q la funcion alla sido llamada
        expect ( onNewCategory ).toHaveBeenCalledTimes(1);// Aqui le decimos q estamos esperando que onNewCategory alla sido llamada una sola vez
        expect ( onNewCategory ).toHaveBeenCalledWith( inputValue );
    
    });

    //Prueba 3
    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 
       
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory = { onNewCategory } />  );

        const form  = screen.getByRole('form');
        fireEvent.submit( form );

        expect ( onNewCategory ).toHaveBeenCalledTimes(0);
        expect ( onNewCategory ).not.toHaveBeenCalled();// aqui hacemos la comprobacion de que no alla sido llamado
 
    });

});