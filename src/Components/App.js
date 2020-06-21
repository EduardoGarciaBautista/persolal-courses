import React from 'react';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../pages/NotFound";
import Home from "./Home";
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailContainer from "../pages/BadgeDetailContainer";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
               <Layout>
                   <Switch>
                       <Route exact path="/badges" component={Badges}/>
                       <Route exact path="/badges/new" component={BadgeNew}/>
                       <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                       <Route exact path="/badges/:badgeId" component={BadgeDetailContainer}/>
                       <Route exact path="/" component={Home}/>
                       <Route component={NotFound}/>
                   </Switch>
               </Layout>
            </BrowserRouter>
        )
    }
}

export default App;
