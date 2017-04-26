import React from 'react';
import {
    Animated,
    Easing,
    View,
    Text,
    StyleSheet,
}from 'react-native';

class AnimatedDemo extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(0),//初始值
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0)
        };
    }

    componentDidMount() {
        var timing = Animated.timing;
        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return timing(this.state[property], {
                toValue: 1,//目标值
                duration: 1000,//动画时间
                easing: Easing.linear//缓动函数
            });
        })).start();
    }

    render() {
        return (
            <Animated.View style={[styles.demo, {
            opacity: this.state.fadeInOpacity,
                transform: [{
                    rotateZ: this.state.rotation.interpolate({
                        inputRange: [0,1],
                        outputRange: ['0deg', '360deg']
                    })
                }]
            }]}>
                <Animated.Text style={{
                fontSize: this.state.fontSize.interpolate({
                    inputRange: [0,1],
                    outputRange: [12,26]
                })
            }}>
                    我骑着七彩祥云出现了😈?
                    ?</Animated.Text>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});

export default AnimatedDemo;