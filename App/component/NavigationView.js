import React, {Component} from 'react';
import {View, Image,StyleSheet,Text,TouchableHighlight,TouchableOpacity} from 'react-native';

export default class NavigationView extends Component {

    constructor(props) {
        super(props)
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        leftBtnAction: React.PropTypes.func,
        rightBtnAction: React.PropTypes.func,
        leftBtnTitle: React.PropTypes.string,
        rightBtnTitle: React.PropTypes.string,
        leftBtnIsHidden: React.PropTypes.string,
        rightBtnIsHidden: React.PropTypes.string
    }

    render() {
        return (
            <View style={styles.constainor}>
                <View style={styles.backView}>
                    {this._leftBtnView()}
                    <View style={styles.title_view}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    {this._rightBtnView()}
                </View>
            </View>
        )
    }

    _leftBtnView() {
        if (this.props.leftBtnIsHidden === '1') {
            return <View style={styles.leftBtnBackView}/>;
        } else {
            return (
                <TouchableOpacity onPress={this.props.leftBtnAction}>
                    <View style={styles.leftBtnBackView}>
                        <Image source={require('../imgs/back.png')} style={styles.leftBtnImage}/>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    _rightBtnView() {
        if (this.props.rightBtnIsHidden === '1') {
            return <View style={styles.leftBtnBackView}/>;
        } else {
            return (
                <TouchableOpacity onPress={this.props.rightBtnAction}>
                    <View style={styles.rightBtnBackView}>
                        <Text style={styles.rightBtnTitle}>{this.props.rightBtnTitle}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create(
    {
        constainor: {
            backgroundColor: '#005ca2',
            height: 44,
        },
        backView: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 44,
        },
        leftBtnBackView: {
            width: 60,
            height: 44,
        },
        leftBtnImage: {
            left: 15,
            width: 14,
            height: 14,
            resizeMode: 'contain',
            top: 14
        },
        title_view:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        title: {
            fontSize: 17,
            color: '#ffffff'
        },
        rightBtnTitle: {
            width: 60,
            height: 44,
            paddingRight: 15,
            textAlign: 'right',
            color: '#ffffff',
            fontSize: 15,
        },
        rightBtnBackView: {
            width: 60,
            height: 44,
        },
        rightBtnImage: {
            left: 15,
            width: 16,
            height: 16,
            resizeMode: 'contain',
            top: 14
        },
    }
)
