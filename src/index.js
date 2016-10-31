/**
 * Created by peixuan.xie on 2016/10/31.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
}from 'react-native';

import FirstView from './FirstView.js';
import LifeCycleTest from './LifeCycleTest.js'

export default class index extends Component {
    constructor(props) {
        super(props);
    }
    goIndex(){
        const { navigator}=this.props;
        if(navigator){
            navigator.push({
                name:'Navigator',
                component:FirstView,
            })
        }
    }

    goLifeCycle(){
        const { navigator}=this.props;
        if(navigator){
            navigator.push({
                name:'LifeCycleTest',
                component:LifeCycleTest,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goLifeCycle.bind(this)}>
                    <Text style={styles.welcome}>lifeCycle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goIndex.bind(this)}>
                    <Text style={styles.welcome}>Navigator</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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

AppRegistry.registerComponent('index', () => index);