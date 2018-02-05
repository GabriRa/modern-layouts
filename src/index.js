import "./index.style.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cannon from "./pages/cannon/cannon.main.jsx";
import Rmotr from "./pages/rmotr/rmotr.main.jsx";

class App extends React.Component{
    render(){
        return(
            <Router>
                <section className="cont-app">
                    <Switch>
                        <Route path="/cannon" component={Cannon}/>
                        <Route path="/rmotr" component={Rmotr}/>
                    </Switch>
                </section>
            </Router>      
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("react"));