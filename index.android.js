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

class book extends Component {

    constructor(props) {
        super(props);
        console.log("constructor()");
        this.state = {name: 'example'}
    }
    //组件将要被渲染
    componentWillMount(){
        console.log("1componentWillMount()");
    };
    //渲染试图
    render() {
        console.log("render");
        return (
            <View style={{padding:10}}>
            </View>
        );
    };
    //渲染完成后
    componentDidMount(){
        console.log("2componentDidMount()");
        this.loadDataToState();
    };
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps()");
    };
    shouldComponentUpdate(nextProps,nextState){
        console.log("4shouldComponentUpdate()");
        return true;
    };
    componentWillUpdate(nextProps,nextState){
        console.log("5componentWillUpdate()");
    };
    componentDidUpdate(prevProps,prevState){
        console.log("6componentDidUpdate()");
    };
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    };
    loadDataToState(){
      console.log("3loadDataToState");
        this.setState({
            name:"RN"
        })
    };
}

AppRegistry.registerComponent('book', () => book);
