import React from "react";

// Pendencia: fazer as separaçoes 

export default function App() {
  return (

    <div className="container">
      <h2>Bootcamp Full Stack - Desafio Final</h2>

      <div className="container">
        <h3>Controle Financeiro Pessoal</h3> 
 

          <select class="browser-default" >
            <option value="" disabled selected>Aqui vai ficar as datas</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

      </div>

      <br></br>
      <span>Lançamento: | Receita: | Despesas:| Saldo: |</span>


    <form action="#">
      <div className="file-field input-field">
        <div className="btn">
          <span>+ NOVO LANCAMENTO</span>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text"  placeholder="Filtro"/>
        </div>
      </div>
    </form>

  <br></br>

    <nav>
    <div className="nav-wrapper">
      <span></span>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html"><i className="material-icons">create</i></a></li>
        <li><a href="badges.html"><i className="material-icons">delete_sweep</i></a></li>
      </ul>
    </div>
  </nav>


    </div>
    
  );
}
