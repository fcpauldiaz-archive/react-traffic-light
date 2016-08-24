
/*for (var i = 0; i < 100; i++) {
	let x = 100;
}
console.log(x);*/

/*let sq = x => x*x; //arrow function to declare inline function
var pares = [2,4,6];*/
/*var impares = pares.map(function(v) {
	return v + 1;
});*/

/*const sq = (x) => {
	return x*x;
}

let impares = pares.map(v => v+ 1);
let cuadros = pares.map(sq);
console.log(impares);
console.log(cuadros);*/
/*
let a = [1,2,3];
let b = [4,5, ...a];
const x = (a,b,c);
console.log(x(...para																																																																																					ms));
console.log(...params);*/

let a = 5;
let b = 6;
let c = 7;
let o = {
	a,b,c
}

let nombre = "lol";
let momento = "mañana";

let saludo = `Hola ${nombre}, que pase feliz ${momento}!`;
console.log(saludo);	

var objeto = {
	"nombre": "Samuel",
	saludar() {
		console.log("hola");
	}
}
objeto.saludar();

let miHermsoPuntoParaEl = {
	y: 0,
	x: 100
}

let {x, y} = miHermsoPuntoParaEl;
console.log(x);
console.log(y);

function hola({a,b=2,c}) {
	return a+b+c;
}
console.log(hola({a:1,b:2,c:3}));

function* miGenerador() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

let generador = miGenerador();
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

for (let i of miGenerador()) {
	console.log(i);
}
let resultado = [...miGenerador()];
console.log(resultado);

//callback hell
// import React from "react";
// import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

// const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);

// import { createStore } from "redux";



// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// console.log("Samuel");

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'DECREMENT'
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'DECREMENT'
// });

// console.log(store.getState());

/*function* xrange({start = 0, end, step = 1}) {
  while(start < end){
    yield start;
    start += step;
  }
}

let params = [1, 2, 3];
let other = [4, 5, ...params];
console.log(other);


let numbers = [ ...xrange({end: 100}) ];
console.log(numbers);*/