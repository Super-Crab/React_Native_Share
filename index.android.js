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

import Ctrip_index from './src/Ctrip_index';
import LifeCycle_Parent from './src/LifeCycle_Parent';
class book extends Component {

    //渲染试图
    render() {
        console.log("render");
        return (
            <View >
                <Ctrip_index></Ctrip_index>
                <LifeCycle_Parent></LifeCycle_Parent>
            </View>
        );
    };


}

AppRegistry.registerComponent('book', () => book);
