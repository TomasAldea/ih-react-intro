
import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';



function App(props) {
  const ingredients = ["patata", "cebolla", "huevo"]
  const footerArray = ["testing", "with", "react"]
  return (
    <div className="App">
      <header className="tittle">
        <h1>{props.headerTittle}</h1>
      </header>
      <body>
        <BodyComent comentario="esto es un comentario" />
        <IngredientsList items={ingredients} />
      </body>
      <footer>
      <FooterList items={footerArray} />
      </footer>
    </div>
  );
}


function BodyComent (props) {
 return(
   <div>
    {props.comentario}
   </div>
 )
}

function IngredientsList(props) {
  const items = props.items;
  const listItems = items.map((index) =>
    <li>{index}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function FooterList(props) {
  const items = props.items;
  const listItemsFooter = items.map((index) =>
    <li>{index}</li>
  );
  return (
    <ul>{listItemsFooter}</ul>
  );
}



export default App;
