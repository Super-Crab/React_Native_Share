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
        this.state = {times:0}
        console.log("constructor()");
    }

    back(){
        const { navigator}=this.props;
        if(navigator){
            navigator.pop();
        }
    }

    timePlus(){
        let time=this.state.times;
        time++;
        this.setState({
            times:time
        })
    }
    //组件将要被渲染
    componentWillMount(){
        console.log("1componentWillMount()");
    };

    //渲染完成后
    componentDidMount(){
        console.log("2componentDidMount()");
    };
    shouldComponentUpdate(nextProps,nextState){
        console.log("4shouldComponentUpdate()");
        return true;
    };

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps()");
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

    render(){
        return (
            <View style={styles.container}>
                <LifeCycle_Parent></LifeCycle_Parent>
                <TouchableOpacity onPress={this.back.bind(this)}>
                    <Text style={styles.welcome}>back</Text>
                </TouchableOpacity>

                <Text style={styles.welcome} onPress={this.timePlus.bind(this)}>
                    点击此处
                </Text>
                <Text style={styles.instructions} >
                    点击了{this.state.times}次
                </Text>

            </View>
        );
    };

    //渲染完成后
    componentDidMount(){
        console.log("2componentDidMount()");
    };
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps()");
        console.log(nextProps);
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