import React from 'react'
import Noticia from './Noticia'
 
export default function Noticias({noticias}) {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4 my-2">
    {noticias.map((noticia, index) => {
        return (<Noticia key={index} noticia={noticia}/>);
    })}
</div>
  )
}
 
 
 
