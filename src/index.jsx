import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Prueba extends Component {
    render() {
      return (
        <h1>Hola perro</h1> 
       );
    }
  }

ReactDOM.render(<Prueba/>, document.getElementById('app'));

//contiene el archivo inicial con nuestro componenete