import React from 'react';
import { Route } from 'react-router-dom';
import First from './First';
import Second from './Second';

function Router() {
    return(
        <div>
            <Route path="/first" component={First}/>
            <Route path="/second" component={Second}/>
        </div>
    )
}

export default Router;