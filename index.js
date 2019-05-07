import React, { Component } from 'react';
import { render } from 'react-dom';

const Hello = (props) => {
  //lo evalua como cadena undefined= false, todas las cadenas las pone como true.(false sale cuando =  cero, undefined, cero y cadena vacia)
  //El ordenador evalua por orden, si el primero ya es true, pondrá ese, el orden importa
  return  (<h2>Bievenida {props.name||'nobody'} a React </h2>)
}

//Esto peta,pq no podemos cambiar las variables
//let Hello = (props) =>{
 // props.name ='jimena'
//  return (<h2>{props.name} bievenida a React </h2>)
//}

function Max(props) {
  //Entre llaves se pueden poner expresiones (algo que devuelve algo)en javascript 
  return <h2>Max of 2 and 5 is {Math.max(2,5)}</h2>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello />
        <Max />
       </div>
    );
  }
}

render(<App />, document.getElementById('root'));
