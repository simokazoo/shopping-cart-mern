  import React, { Component } from 'react';
  import Products from './components/ProductList';
  import Cart from './components/Cart';
  import Checkout from './components/Checkout';
  import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';
        
    class App extends Component {
     
      render() {
        return (
          <Router>
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                  <Link className="navbar-brand" to="/">ShoppingCart</Link>
                  <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <Link className="nav-item nav-link" to="/">Products</Link>
                      <Link className="nav-item nav-link" to="/cart">Cart</Link>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="container">
                <br/>
                <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
              </div>
            </div>
          </Router>
        );
      }
    }
    
    export default App;