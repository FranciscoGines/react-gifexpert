import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
//entrada
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages (newImages);// esta es la funcion del usestate
        setIsLoading(false);
       
    }

    useEffect(  () => {
        getImages();
    }, [])
    // salida
    return {
        images,
        isLoading

    }

}
