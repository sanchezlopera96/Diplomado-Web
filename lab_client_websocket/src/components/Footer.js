import React from 'react'
 
export default function Footer({autor, year}) {
  return (
    <footer className='mt-auto'>
        <p>{autor} &copy; {year}</p>
    </footer>
  )
}
