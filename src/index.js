import "./index.style.css";
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Cannon from "./pages/cannon/cannon.main.jsx";
import Rmotr from "./pages/rmotr/rmotr.main.jsx";

class App extends React.Component{
    render(){
        return(
            <Router>
                <section className="cont-app">
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Switch>
                            <Route path="/cannon" component={Cannon}/>
                            <Route path="/rmotr" component={Rmotr}/>

                            <Redirect to="/cannon"/>
                        </Switch>
                    </BrowserRouter>
                </section>
            </Router>      
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("react"));