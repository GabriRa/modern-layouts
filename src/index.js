import "./index.style.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cannon from "./pages/cannon/cannon.main.jsx";

class App extends React.Component{
    render(){
        return(
            <Router>
                <section className="cont-app">
                    {/*<div className="selection-page">
                        Hola
                    </div>*/}
                    <Switch>
                        <Route path="*" component={Cannon}/>
                    </Switch>
                </section>
            </Router>      
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("react"));