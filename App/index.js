import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
    BackAndroid,
    Platform,
} from 'react-native';

import {getRouteMap, registerNavigator} from '../App/router';
import Main from './pages/Main'
import ToastUtil from './utils/ToastUtils';
import PageConfig from '../App/config/pageConfig'

let lastClickTime = 0;

export default class app extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.onBackAndroid = this.onBackAndroid.bind(this);
        this.configureScene = this.configureScene.bind(this);
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    //渲染试图
    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                initialRoute={{name: 'Main'}}
                />
        );
    }
    //出场动画
    configureScene(route) {
        let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
        if (sceneAnimation) {
            return sceneAnimation;
        }
        //默认
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    renderScene(route, navigator) {
        this.navigator = navigator;
        registerNavigator(navigator);
        let Component = getRouteMap().get(route.name).component;
        if (!Component) {
            return (
                <View >
                    <Text >您所启动的Component未在routeMap中注册</Text>
                </View>
            );
        }
        return   <Component {...route}/>;
    }
    onBackAndroid() {
        const routers = this.navigator.getCurrentRoutes();
        if (routers.length > 1) {
            this.navigator.pop();
            return true;
        }
        let now = new Date().getTime();
        if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
            return false;//控制权交给原生
        }
        lastClickTime = now;
        ToastUtil.show('再按一次退出一个');
        return true;
    }
};


