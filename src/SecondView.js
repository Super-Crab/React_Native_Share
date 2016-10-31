/**
 * Created by peixuan.xie on 2016/10/31.
 */

import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    TouchableOpacity
}from 'react-native';

const USER_MODELS={
    1:{姓名:'jpx',性别:'boy'},
    2:{姓名:'王二',性别:'girl'}
};

export default class SecondView extends Component{

    constructor(props){
        super(props);
        this.state={
            id:null
        };
    }

    componentDidMount(){
        this.setState({
            id:this.props.id
        });
    }

    onPressButton() {
        const { navigator } = this.props;

        if(this.props.getUser) {
            let user = USER_MODELS[this.props.id];
            this.props.getUser(user);
        }

        if(navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    要查询的学生id为：{ this.state.id }
                </Text>
                <TouchableOpacity onPress={this.onPressButton.bind(this)}>
                    <Text style={styles.welcome}>
                        点击返回学生信息
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

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

AppRegistry.registerComponent('SecondView', () => SecondView);