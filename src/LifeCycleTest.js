/**
 * Created by peixuan.xie on 2016/10/31.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import LifeCycle_Parent from './LifeCycle_Parent.js'

export default class LifeCycleTest extends Component{

    constructor(props){
        super(props);
    }

    back(){
        const { navigator}=this.props;
        if(navigator){
            navigator.pop();
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <LifeCycle_Parent></LifeCycle_Parent>
                <TouchableOpacity onPress={this.back.bind(this)}>
                    <Text style={styles.welcome}>back</Text>
                </TouchableOpacity>
            </View>
        );
    };
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
AppRegistry.registerComponent('LifeCycleTest',LifeCycleTest);