import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Home from './pages/home';

import Layout from './components/layout';


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchUser());
        // dispatch({ type: 'SET_TREE_NAME', payload: 'CPROK.' })
    }, [])

    return (
        <Router>
            <Layout>
                <Switch>
                    
                    <Route path="/" component={Home} />

                </Switch>
            </Layout>
        </Router>
    )
}

export default App