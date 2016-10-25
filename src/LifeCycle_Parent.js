/**
 * Created by peixuan.xie on 2016/10/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';

import LifeCycle from './LifeCycle.js'
export default class LifeCycle_Parent extends Component {

    constructor(props) {
        super(props);
        console.log("constructor()+LifeCycle_Parent");
        this.state = {name: 'LifeCycle_Parent'}
    }

    componentDidMount(){
        this.setState({
            name:"jpx"
        });
    }

    render() {
        return (
            <View>
                    <LifeCycle name={this.state.name}></LifeCycle>
            </View>
        );
    }
}