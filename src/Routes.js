import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';

const Routes = () => {

    const check = () => {
        return !!(navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i));
    };

    return(
        <Router>
            <div>
                {check() ?
                    <div style={style}>

                        <p>Thank you for coming to my page!</p>
                        <p>Kindly view it from your laptop/desktop screen.</p>
                        <p>The mobile version is still in progress.</p>
                    </div>
                    :
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" component={Home}/>
                    </Switch>}

            </div>
        </Router>
    )
};

const style = {
    padding: '24px',
    color: 'black',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Avenir-light, sans-serif'
};

export default Routes;