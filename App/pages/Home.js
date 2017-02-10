import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Home</Text>
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

export default Home;