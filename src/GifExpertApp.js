import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch man']);
    return (
        <>
            <h2 >GIFEXPERTAPP</h2>
            <hr/>
           
           <AddCategory setCategories={setCategories} />{/*este addcategory es el input para escribir  */}

            <ol>
               { 
                /*categories.map((x)=>{return <li key={x}>{x}</li>})*/
                //el GifGrid es donde estan las peticione a la api 
                categories.map(category=>(
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
               }
            </ol>
        </>
    )
}
