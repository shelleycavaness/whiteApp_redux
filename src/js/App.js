import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from './pages/home';
import Login from './pages/loginPage'
import Layout from './components/layout';
import Dashboard from './pages/dashboard'
import DetailPage from './pages/detail'


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
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route path="/browse/" component={Dashboard} />
                    <Route path="/books/:id" component={DetailPage} />
                </Switch>
            </Layout>
        </Router>
                
    )
}

export default App