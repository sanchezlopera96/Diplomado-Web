import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Noticias from './Noticias'
import { AUTOR, API_URL, API_COUNTRY } from '../config'
import './Main.css'
 
 
export default function Main() {
 
  const [noticias, setNoticias] = useState([])
 
  useEffect(() => {
    getNoticias();
  }, []);
 
  const getNoticias = async (categoria = 'general') => {
    const URL = `${ API_URL}/top-headlines?country=${API_COUNTRY}&category=${categoria}&apiKey=${process.env.REACT_APP_API_TOKEN}`;
    await fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.articles)
        setNoticias(data.articles)
    })
    .catch(error => console.log(error))
  }
 
  return (//JSX
    <div className="container mt-3">
        <Header getNoticias={getNoticias}/>
        <Noticias noticias={noticias}/>
        <Footer autor={AUTOR}/>
    </div>
  )
}
 
