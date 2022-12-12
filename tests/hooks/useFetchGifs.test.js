import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('pruebas en el hook useFetchGifs', () => { 
    
    test('debe de regresar el estado inicial', () => { 
        // este render hook devuelve varias cosas
      const { result } = renderHook ( () => useFetchGifs('One Punch') );
    //   console.log(result)
      const { images, isLoading } = result.current;

      expect( images.length ).toBe(0);
      expect( isLoading).toBeTruthy();
    
    });  
    
    test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 
        // este render hook devuelve varias cosas
      const { result } = renderHook ( () => useFetchGifs('One Punch') );
      // aqui le decimos espera por..esta esperando q yo le envie un colback
      await waitFor (
        () => expect( result.current.images.length ).toBeGreaterThan(0),//toBeGreaterThan le decimos ue sea mas grande que cero
        {
            timeout: 1000 // le ponemos un tiempo para que si da error lo arroje esto s elo pongo porque yo quiero conste se peude eliminar 
        }
      ); 


    //   console.log(result)
      const { images, isLoading } = result.current;

      expect( images.length ).toBeGreaterThan(0);
      expect( isLoading).toBeFalsy();
    
    }); 

});