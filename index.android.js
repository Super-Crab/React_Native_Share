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
    Navigator
} from 'react-native';

import Ctrip_index from './src/Ctrip_index';
import LifeCycle_Parent from './src/LifeCycle_Parent';
import FirstView from './src/FirstView.js';
import index from './src/index.js';
class book extends Component {

    //渲染试图
    render() {

        let rootViewName = 'index';
        let rootComponent = index;
        console.log("render");
        //return (
        //    <View >
        //        <LifeCycle_Parent></LifeCycle_Parent>
        //    </View>
        //);
        return (
            <Navigator
                initialRoute={{ name: rootViewName, component: rootComponent }}
                configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump ;
        }}
                renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator = {navigator} />
        }}/>
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
