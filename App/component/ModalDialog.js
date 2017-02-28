/**
 * Created by peixuan.xie on 2017/2/28.
 */
import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View ,
    StyleSheet,
    BackAndroid
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;//宽
let totalHeight = Dimensions.get('window').height;//高


export default class KaBaoModal extends Component {

    // 构造
    constructor(props) {
        super(props);
    }

    static propTypes = {
        _dialogTitle: React.PropTypes.string,
        _dialogContent: React.PropTypes.string,
        _dialogLeftBtnTitle: React.PropTypes.string,
        _dialogRightBtnTitle: React.PropTypes.string,
        _dialogLeftBtnAction: React.PropTypes.func.isRequired,
        _dialogRightBtnAction: React.PropTypes.func.isRequired,
        _dialogVisible: React.PropTypes.bool,
    }

    static defaultProps = {
        _dialogTitle: '温馨提示',
        _dialogContent: '是否退出',
        _dialogLeftBtnTitle: '取消',
        _dialogRightBtnTitle: '确定',
        _dialogVisible: false,
    }

    render() {
        // onPress事件直接与父组件传递进来的属性挂接
        return (
            <Modal
                visible={this.props._dialogVisible}
                transparent={true}
                onRequestClose={() => {}}
                >
                <View style={styles.confirmCont}>

                    <View style={styles.dialogStyle}>
                        <Text style={styles.textPrompt}>
                            {this.props._dialogTitle}
                        </Text>
                        <Text style={styles.textContext}>
                            {this.props._dialogContent}
                        </Text>
                        <Text style={styles.yesButton} onPress={this.props._dialogLeftBtnAction}>
                            {this.props._dialogLeftBtnTitle}
                        </Text>
                        <Text style={styles.cancelButton} onPress={this.props._dialogRightBtnAction}>
                            {this.props._dialogRightBtnTitle}
                        </Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    confirmCont: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        position: 'absolute',  //声明绝对定位
        top: 0,
        width: totalWidth,
        height: totalHeight,
        backgroundColor: 'rgba(52,52,52,0.5)'  //rgba  a0-1  其余都是16进制数
    },
    dialogStyle: {
        position: 'absolute',
        left: totalWidth / 10, // 定义Dilaog起点位置
        top: totalHeight * 0.28,
        width: totalWidth * 0.8,
        height: totalHeight * 0.35,
        backgroundColor: 'white',
        borderRadius: 8
    },
    textPrompt: {
        position: 'absolute',
        textAlign: 'center',
        width: totalWidth * 0.8,
        height: totalHeight * 0.1,
        fontSize: 18,
        top: 0,
        color: '#000000',
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingTop: totalHeight * 0.034,
    },
    textContext: {
        position: 'absolute',
        textAlign: 'center',
        top: totalHeight * 0.09,
        width: totalWidth * 0.8,
        height: totalHeight * 0.15,
        fontSize: 16,
        color: '#4A4A4A',
        backgroundColor: '#FFFFFF',
        paddingTop: totalHeight * 0.042,
    },
    yesButton: {
        position: 'absolute',
        width: totalWidth * 0.395,
        height: totalHeight * 0.1,
        backgroundColor: '#E5F2FF',
        fontSize: 18,
        color: '#007AFF',
        bottom: 0,
        right: 0,
        textAlign: 'center',
        borderBottomRightRadius: 8,
        paddingTop: totalHeight * 0.032,
    },
    cancelButton: {
        position: 'absolute',
        width: totalWidth * 0.395,
        height: totalHeight * 0.1,
        backgroundColor: '#E5F2FF',
        fontSize: 18,
        color: '#727677',
        bottom: 0,
        left: 0,
        textAlign: 'center',
        borderBottomLeftRadius: 8,
        paddingTop: totalHeight * 0.032,
    }
});