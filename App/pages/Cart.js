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
                    onPress={this.getDeviceEventEmitterTime.bind(this)}
                    >
                    getParams
                </Text>

            </View>
        )
    }
    //使用DeviceEventEmitter从native获取到参数
    getDeviceEventEmitterTime() {
        NativeModules.ToastCustomAndroid.getParams();
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:'column',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Cart;