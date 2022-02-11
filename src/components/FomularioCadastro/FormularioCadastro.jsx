import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = ""; //usando um medoto ou atributo de uma instancia, similar a new FormularioCadastro();
    this.texto = "";
  }
  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNotas(evento){
    evento.preventDefault();
    evento.stopPropagation();
    console.log("uma nova nota foi criada " + this.titulo + " " + this.texto)
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNotas.bind(this)}
      >
        <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={this._handleMudancaTitulo.bind(this)}
        />

        <textarea
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={this._handleMudancaTexto.bind(this)}
        />
        
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota </button>
      </form>
    );
  }
}

export default FormularioCadastro;
