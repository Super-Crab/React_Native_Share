import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DeviceEventEmitter,
    ToastAndroid
} from 'react-native';
var { NativeModules } = require('react-native');
class Cart extends Component {
    componentWillMount() {
        DeviceEventEmitter.addListener('getParams', function (msg) {
            ToastAndroid.show("DeviceEventEmitter收到消息:" + "\n" + msg.key, ToastAndroid.SHORT)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}
                      onPress={() => NativeModules.ToastCustomAndroid.show("我是ToastCustomAndroid弹出消息", NativeModules.ToastCustomAndroid.SHORT)}>
                    Cart
                </Text>
                <Text
                    style={styles.hello}
                    onPress={this.getDeviceEventEmitter.bind(this)}
                    >
                    RCTDeviceEventEmitter方式
                </Text>

                <Text
                    style={styles.hello}
                    onPress={this.getCallBack.bind(this)}
                    >
                    CallBack方式
                </Text>

                <Text
                    style={styles.hello}
                    onPress={this.getPromise.bind(this)}
                    >
                    Promise方式
                </Text>

            </View>
        )
    }

    getPromise() {
        NativeModules.ToastCustomAndroid.sendPromiseTime("").then(msg=> {
            console.log("年龄:" + msg.age + "/n" + "时间:" + msg.time);
            ToastAndroid.show("Promise收到消息:" + "\n" + "年龄:" + msg.age + "时间:" + msg.time, ToastAndroid.SHORT)

            this.setState({
                age: msg.age,
                time: msg.time,
            })
        }).catch(error=> {
            console.log(error);
        });
    }

    getCallBack() {
        NativeModules.ToastCustomAndroid.callBackTime("",
            (msg) => {
                console.log(msg);
                ToastAndroid.show("CallBack收到消息:" + "\n" + msg, ToastAndroid.SHORT)

            }
        );

    }

    //使用DeviceEventEmitter从native获取到参数
    getDeviceEventEmitter() {
        NativeModules.ToastCustomAndroid.getParams();
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Cart;