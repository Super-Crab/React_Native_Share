import {
    Navigator,
} from 'react-native';

import PAGE_CONFIG from './config/pageConfig'

import Main from '../App/pages/Main';
import AnimatedDemo from './ex/AnimatedDemo';
import BannerDemo from './ex/BannerDemo';
import ModalDemo from './ex/ModalDemo';
import WebViewDemo from './ex/WebViewDemo';

let navigator;

const routeMap = new Map();

routeMap.set('Main',{
    component:Main,
    sceneAnimation: Navigator.SceneConfigs.FadeAndroid
});

routeMap.set('AnimatedDemo',{
    component:AnimatedDemo
});
routeMap.set('BannerDemo',{
    component:BannerDemo
});
routeMap.set('ModalDemo',{
    component:ModalDemo
});
routeMap.set('WebViewDemo',{
    component:WebViewDemo
});




export function registerNavigator(tempNavigator) {
    if (navigator) {
        return;
    }
    navigator = tempNavigator;
}
export function getNavigator() {
    return navigator;
}
export function getRouteMap() {
    return routeMap;
}
