import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import Product from './Components/product';
import ProductItem from './Components/productItem';
import About from './Components/about';
import Home from './Components/home';
import MuiBar from './Components/mUIBar';

function RouteConfig() {
    return (
        <div>
            <Router>
            <MuiBar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/product" component={Product}/>
                    <Route path="/product/:id" component={ProductItem}/>
                    <Route path="*" component={()=><h3>404 Page not found</h3>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default RouteConfig;