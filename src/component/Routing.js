import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import RestListing from './Listing/ListingApi';
import RestDetails from './details/RestaurentDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/list/:id" component={RestListing}></Route>
                <Route path="/details/:id" component={RestDetails}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;
