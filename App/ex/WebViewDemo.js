import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
} from 'react-native';

import NavigationView from '../component/NavigationView.js'
const {width,height}=Dimensions.get('window');
const url="http://www.lcode.org";

var WEBVIEW_REF = 'webview';

class WebViewDemo extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            backButtonEnabled: false,
        };
    }

    back(){
        if(this.state.backButtonEnabled){
            this.refs[WEBVIEW_REF].goBack();
        }else{
            this.props.navigator.pop()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationView
                    title="技术专栏"
                    leftBtnAction={()=>{this.back()}}
                    />
                <WebView
                    ref={WEBVIEW_REF}
                    style={{width:width,height:height-20,backgroundColor:'white'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    startInLoadingState={true}
                    onNavigationStateChange={this.onNavigationStateChange}
                    />
            </View>
        )
    }

    onNavigationStateChange = (navState) => {
        this.setState({backButtonEnabled: navState.canGoBack});
    }

}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default WebViewDemo;