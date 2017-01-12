/**
 * Created by peixuan.xie on 2017/1/12.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    DrawerLayoutAndroid,
    View,
}from 'react-native';

/*加载图片分为三种，react本地 Android 以及网络图片
 react 图片：
 不需要指定宽和高
 Android 图片：
 需要指定宽和高，并且加载drawbale文件夹里的图片，不加后缀
 网络图片：
 需要制定宽和高*/
export default class Com_DrawerLayoutAndroid extends Component {

    render() {

        var navigationView = (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('Com_DrawerLayoutAndroid', () => Com_DrawerLayoutAndroid);