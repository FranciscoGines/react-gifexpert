import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas en getGifs()', () => { 
  
    test('debe fe retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs (' One Punch');
        // console.log(gifs)
        //aqui decimos que tenenmos un arreglo conmas de un elemento
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0]).toEqual( {
            id: expect.any( String ) ,
            title: expect.any( String ) ,
            url: expect.any( String ) ,

        } );
        





    })
})