import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Text,
    TouchableOpacity,
    InteractionManager,
    RefreshControl
} from 'react-native';

import ToastUtil from "../utils/ToastUtils.js"

const moreText = "加载完毕";    //foot显示的文案
//页码
var pageNum = 1;
//每页显示数据的条数
const pageSize = 10;
//页面总数据数
var pageCount = 0;
//页面List总数据
var totalList = new Array();

//foot：  0 隐藏  1  已加载完成   2  显示加载中

class Order extends React.Component {

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
            // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
            loaded: false,//控制Request请求是否加载完毕
            foot:2,// 控制foot， 0：隐藏foot  1：已加载完成   2 ：显示加载中
            error:false,
            isRefreshing: false,
        };
    }

    componentWillMount(){
        this._fetchListData();
    }

    componentWillUnmount() {
// 如果存在this.timer，则使用clearTimeout清空。
// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    _fetchListData(){
        for (var i=0; i <10; i++) {
            totalList.push( i +'test');
        }
        console.log(totalList);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(totalList),
            loaded: true,
            isRefreshing: false,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,sectionId,rowId)}
                    renderFooter={this._renderFooter.bind(this)}
                    onEndReached={this._endReached.bind(this)}
                    onEndReachedThreshold={0}
                    refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing }
							onRefresh={ this._endReached.bind(this) }
							tintColor="gray"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							progressBackgroundColor="gray"/>
					}/>
            </View>
        )
    }

    _renderFooter() {
        if(this.state.foot === 1){//加载完毕
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:12,marginTop:10}}>
                        {this.state.moreText}
                    </Text>
                </View>);
        }else if(this.state.foot === 2) {//加载中
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'center',}}>

                </View>);
        }
    }

    _endReached(){
        this.setState({isRefreshing: true});
        this.timer = setTimeout(
            () => {
                pageNum ++;
                this._fetchListData();
            },500);
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

export default Order;