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

import root from './App/root.js';
import ToastUtil from './App/utils/ToastUtils.js'

var _navigator;

//标记是第几次按下返回键
let isFirstQuit = 0;

//Andrid 返回键监听
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    } else {
        if (isFirstQuit == 0) {
            ToastUtil.show('再按一次退出应用');
            isFirstQuit = 1;
            this.timer = setTimeout(()=> {
                isFirstQuit = 0;
            }, 1000)
            return true;
        } else if (isFirstQuit == 1) {
            return false;//返回false，表示执行系统默认实现
        }
    }
});

class book extends Component {

    //渲染试图
    render() {
        let rootViewName = 'root';
        let rootComponent = root;
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
    }

;
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
