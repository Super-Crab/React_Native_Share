import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
} from 'react-native';

const {width,height}=Dimensions.get('window');
const url="http://www.lcode.org";
class WebViewDemo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'white'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    startInLoadingState={true}
                    />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default WebViewDemo;