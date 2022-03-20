import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({category}) => {

   // const [Count, setCount] = useState(0);
//    const  [Images, setImages] = useState([])

    const   {data,loading} = useFetchGifs(category);


  
    
    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Cargando... </p>}
        <div className="card-grid"> 

            {
                /* 
                   
                    <h3>{Count}</h3>
                    <button onClick={()=>setCount(Count + 1)}></button>

                    ---comentario de desectructuracion
                    Images.map(({id,title}) => (
                        <li key={id}>{title}</li>
                    ))                    
                ))
                GifGridItem-> es donde armamos el div con nuestras imagenes,pasandole los valores del api
                */
               
                data.map( img => (
                <GifGridItem 
                    key={img.id}
                    {...img}
                />))
               
            }                             
        </div>
        </>
        
    )
}
