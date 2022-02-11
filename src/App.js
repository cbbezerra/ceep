import React, { Component } from "react";
import FormularioCadastro from "./components/FomularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  criarNota(titulo, texto){
    console.log("uma nova nota foi criada " + titulo + " " + texto)
  }
  render() {
    return (
    <section className="conteudo">
      <FormularioCadastro criarNota={this.criarNota} />
      <ListaDeNotas/>     
    </section>
    
  );
  }  
}

export default App;
