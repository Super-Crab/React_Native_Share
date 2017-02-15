import React, {Component} from 'react';
import {ToastAndroid} from 'react-native';
/**
 * Created by peixuan.xie on 2017/2/15.
 *
 * Toast工具类
 */
export default class ToastUtil {

    static show(hint) {
        ToastAndroid.show(hint, ToastAndroid.SHORT);
    }

}