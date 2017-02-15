import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Text,
    TouchableOpacity,
} from 'react-native';

import ToastUtil from "../utils/ToastUtils.js"

import WebViewDemo from "../ex/WebViewDemo.js"

const TAG_WEBVIEW = 'WebViewDemo';

class Home extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        /**
         * 使用DataSource作为ListView的数据源
         * 该构造函数接收四个参数
         * getRowData(dataBlob, sectionID, rowID)
         * getSectionHeaderData(dataBlob, sectionID)
         * rowHasChanged(prevRowData, nextRowData)
         * sectionHeaderHasChanged(prevSectionData, nextSectionData)
         */
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows([
                'WebViewDemo', 'Banners', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
            ])
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,sectionId,rowId)}
                    />
            </View>
        )
    }

    //渲染列表项
    _renderRow(rowData, sectionId, rowId) {
        return (
            <View>
                <TouchableOpacity onPress={()=>{this._onItemClick(rowData, rowId)}}>
                    <Text
                        style={styles.hello}>
                        {rowData}+{sectionId}+{rowId}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    //处理列表item的点击事件
    _onItemClick(rowData, rowId) {

        ToastUtil.show("点击了" + rowData + rowId);
        console.log(rowData);
        const {navigator}=this.props;
        switch (rowData) {
            case TAG_WEBVIEW:
                navigator.push({
                    name: rowData,
                    component: WebViewDemo,
                })
                break;
        }
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Home;