'use strict';

import React from 'react'
import {
    StyleSheet,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from './Home';
import Cart from './Cart';
import Center from './Center';
import Order from './Order';

const HOME_TAG='home';
const HOME_TITLE='主页';
const HOME_NORMAL=require('../../imgs/ic_tab_home.png');
const HOME_FOCUS=require('../../imgs/ic_tab_home_press.png');

const CART_TAG='cart';
const CART_TITLE='购物车';
const CART_NORMAL=require('../../imgs/ic_tab_cart.png');
const CART_FOCUS=require('../../imgs/ic_tab_cart_press.png');

const CENTER_TAG='center';
const CENTER_TITLE='我的';
const CENTER_NORMAL=require('../../imgs/ic_tab_center.png');
const CENTER_FOCUS=require('../../imgs/ic_tab_center_press.png');

const ORDER_TAG='order';
const ORDER_TITLE='订单';
const ORDER_NORMAL=require('../../imgs/ic_tab_order.png');
const ORDER_FOCUS=require('../../imgs/ic_tab_order_press.png');

class root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <TabNavigator>
                {this._renderTabItem(HOME_TAG,HOME_TITLE,HOME_NORMAL,HOME_FOCUS)}
                {this._renderTabItem(ORDER_TAG,ORDER_TITLE,ORDER_NORMAL,ORDER_FOCUS)}
                {this._renderTabItem(CART_TAG,CART_TITLE,CART_NORMAL,CART_FOCUS)}
                {this._renderTabItem(CENTER_TAG,CENTER_TITLE,CENTER_NORMAL,CENTER_FOCUS)}
            </TabNavigator>
        );
    }

    /**
     * 渲染tab中的item
     * @param tag
     * @param title
     * @param iconNormal
     * @param iconFocus
     * @param pageView
     * @returns {XML}
     * @private
     */
    _renderTabItem(tag, title, iconNormal, iconFocus){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title={title}
                titleStyle={styles.textStyle}
                selectedTitleStyle={styles.selectedTextStyle}
                renderIcon={() => <Image source={iconNormal} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={iconFocus} style={styles.iconStyle}/>}
                onPress={() => this.setState({selectedTab: tag})}>
                {this._createContentPage(tag)}
            </TabNavigator.Item>
        )
    }

    _createContentPage(tag) {
        switch (tag) {
            case HOME_TAG:
                return (<Home {...this.props}/>);
            case CART_TAG:
                return (<Cart {...this.props}/>);
            case CENTER_TAG:
                return (<Center {...this.props}/>);
            case ORDER_TAG:
                return (<Order {...this.props}/>);
        }
    }

}

const styles = StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#999',
    },
    selectedTextStyle:{
        color:'black',
    }
});

export default root;
