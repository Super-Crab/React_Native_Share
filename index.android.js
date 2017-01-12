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
    Text,
    Navigator,
    BackAndroid
} from 'react-native';

import index from './src/index.js';

var _navigator;

//Andrid 返回键监听
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    _navigator.pop();
    return true;
});

class book extends Component {

    //渲染试图
    render() {
        let rootViewName = 'index';
        let rootComponent = index;
        console.log("render");
        return (
            <Navigator
                initialRoute={{ name: rootViewName, component: rootComponent }}
                configureScene={(route) => {
                                return Navigator.SceneConfigs.HorizontalSwipeJump ;
            }}
                renderScene={(route, navigator) => {
                        _navigator=navigator;
                        let Component = route.component;
                        return <Component {...route.params} navigator = {navigator} />
            }}
                />
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('book', () => book);
