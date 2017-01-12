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
import ComImage from './Component/Com_image.js'

export default class index extends Component {
    constructor(props) {
        super(props);
    }

    goIndex(id) {
        const { navigator}=this.props;
        if (navigator) {
            switch (id) {
                case 'Navigator':
                    navigator.push({
                        name: 'Navigator',
                        component: FirstView,
                    })

                    break;
                case 'LifeCycleTest':
                    navigator.push({
                        name: 'LifeCycleTest',
                        component: LifeCycleTest,
                    })
                    break;
                case 'Image':
                    navigator.push({
                        name: 'Image',
                        component: ComImage,
                    })
                    break;
            }
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.goIndex('LifeCycleTest')}>
                    <Text style={styles.welcome}>lifeCycle</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.goIndex('Navigator')}>
                    <Text style={styles.welcome}>Navigator</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.goIndex('Image')}>
                    <Text style={styles.welcome}>Image</Text>
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