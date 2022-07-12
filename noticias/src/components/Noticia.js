import React from 'react'
 
export default function Noticia({noticia}) {
 
  const {urlToImage, title, url, content, publishedAt, source} = noticia;
 
  return (
<div className="col">
    <div className="card">
      <img src={urlToImage} className="card-img-top" alt=""/>
      <small className='text-muted mx-3'>{publishedAt}</small>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a
            href={url}
            className="btn btn-outline-dark"
            target='_blank'
        >
           {source.name}
        </a>
      </div>
    </div>
  </div>
  )
}
