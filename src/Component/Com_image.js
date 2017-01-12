/**
 * Created by peixuan.xie on 2017/1/12.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
}from 'react-native';

/*加载图片分为三种，react本地 Android 以及网络图片
    react 图片：
            不需要指定宽和高
    Android 图片：
            需要指定宽和高，并且加载drawbale文件夹里的图片，不加后缀
    网络图片：
            需要制定宽和高*/
export default class Com_image extends Component {

    render() {
        return (
            <View style={{backgroundColor: '#F5FCFF', flex: 1,}}>
                <Text style={{fontSize:16}}>'测试React Native本地图片'</Text>
                <Image source={require('../img/ic_launcher.png')}/>
                <Text style={{fontSize:16}}>'测试Android本地图片'</Text>
                <Image source={{uri:'ic_launcher'}} style={{width: 40, height: 40}}/>
                <Text style={{fontSize:16}}>'测试网络图片'</Text>
                <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 40, height: 40}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('Com_image', () => Com_image);