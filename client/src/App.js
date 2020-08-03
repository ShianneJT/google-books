import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import Saved from './pages/Saved';


function App() {
    return (
        <Router>
            <Nav />
            <Header />
            <div>
                <Route exact path="/" component={Search} />
                <Route exact path="/saved" component={Saved} />
            </div>
            <Footer />
        </Router>
    );
}

export default App;
