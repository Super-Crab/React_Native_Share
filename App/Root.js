import React,{Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';

import Index from './index';

const  store = configureStore();

export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
}