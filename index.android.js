/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

import LifeCycle_Parent from './src/LifeCycle_Parent'
class book extends Component {

    //渲染试图
    render() {
        console.log("render");
        return (
            <LifeCycle_Parent></LifeCycle_Parent>
        );
    };

}

AppRegistry.registerComponent('book', () => book);
