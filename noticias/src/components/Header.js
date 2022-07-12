import React from 'react'
 
export default function Header({getNoticias}) {
 
    const categoriaRef = React.createRef();
 
    const enviarCategoria = () => {
        const categoria = categoriaRef.current.value;
        getNoticias(categoria);
    }
 
  return (
    <nav className="navbar bg-dark">
    <div className="container-fluid">
        <h1 className="navbar-brand">Noticias Colombia</h1>
        <div className="d-flex" role="search">
            <select
                onChange={enviarCategoria}
                ref={categoriaRef}
                className="form-select"
                aria-label="Categorias"
            >
               <option selected value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>
            <button
                className="btn btn-outline-success" type="button"
                onClick={enviarCategoria}
            >
                Search
            </button>
        </div>
    </div>
</nav>
  )
}
