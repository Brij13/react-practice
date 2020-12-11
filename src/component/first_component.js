import React from 'react';

// function Hello(){
// 	return <h1>Hello Brij</h1>;
// }

 const Hello = (props) => {
 	console.log(props);
	return <div><h1>Hello {props.name}</h1>{props.children}
	</div>
}






export default Hello;
