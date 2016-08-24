import expect from "expect";
import {createStore} from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
require("../sass/styles.scss")

const validateIndex  = (index,list) => 0 <= index && index < list.size;

const Traffic = ({changeToRed, changeToYellow, changeToGreen}) => (
		<div>
			<button onClick={ changeToRed}>Turn on Red</button>
			<button onClick={ changeToYellow}>Turn on Yellow</button>
			<button onClick={ changeToGreen}>Turn on Green</button>
			
		</div>
)
const TrafficList = ({ list }) => (
	<div>
		{
			<Traffic
				changeToRed={
					() => store.dispatch({
						type: 'TURN_ON_RED',
					})
				}
				changeToYellow={
					() => store.dispatch({
						type: 'TURN_ON_YELLOW',
					})
				}
				changeToGreen={
					() => store.dispatch({
						type: 'TURN_ON_GREEN',
					})
				}
			/>
				
			
		}
	
	</div>
);
//reductor
const trafficReducer = (state, action) => {
  if(typeof action.payload !== 'undefined'){
    var { index } = action.payload;
  }
  switch (action.type){
    case 'TURN_ON_RED':
      return {red: "red light" , yellow: "yellow light off", green: "green light off"};
    case 'TURN_ON_YELLOW':
      return {red: "red light off", yellow: "yellow light", green: "green light off"};
    case 'TURN_ON_GREEN':
        return {red: "red light off", yellow: "yellow light off", green: "green light"};
    default:
       return {red: "red light", yellow: "yellow light off", green: "green light off"};
  }
} 

const store = createStore(trafficReducer);

const render = () => {
	console.log(store.getState());
	console.log(store.getState().red);
	ReactDOM.render(
	<div>
		<div class="traffic-light">
			<div class="red light" className={store.getState().red}></div>
			<div class="yellow light"  className={store.getState().yellow}></div>
			<div class="green light off"  className={store.getState().green}></div>
		</div>
		<TrafficList list={ store.getState()}/>
	</div>,
		document.getElementById('root')
	);
}

store.subscribe(render);
render();