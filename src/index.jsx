import React from 'react';
import ReactDOM from 'react-dom/client';
import Nika from './Aplication';
class App extends React.Component{
    render (){
        return(
            <Nika></Nika>
        );
    }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);