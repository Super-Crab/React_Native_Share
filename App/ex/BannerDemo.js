import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Banner from "react-native-banner";

class BannerDemo extends React.Component {

    // 构造
    constructor(props) {
        super(props);

        this.banners = [
            {
                title: 'beauty 1',
                image: 'http://source.51yrz.com/1466071007.jpg?imageView2/1/w/600/h/300',
            },
            {
                title: 'beauty 2',
                image: 'http://source.51yrz.com/1466126704.jpg?imageView2/1/w/600/h/300',
            },
            {
                title: 'The next banner has no title',
                image: 'http://source.51yrz.com/1466071229.jpg?imageView2/1/w/600/h/300',
            },
            {
                // title: 'no title',
                image: 'http://source.51yrz.com/1466473308.jpg?imageView2/1/w/600/h/300',
            },
        ];
        // 初始状态
        this.state = {
            clickTitle: 'You can try clicking beauty',
            defaultIndex: 0,
        }
        this.defaultIndex = 0;
    }

    render() {
        return (
            <View style={styles.container}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                    />
                <Text>{this.state.clickTitle}</Text>
            </View>
        )
    }

    clickListener(index) {
        this.setState({
            clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
        })
    }

    onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
        this.defaultIndex = state.index;
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default BannerDemo;