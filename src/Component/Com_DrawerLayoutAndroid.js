/**
 * Created by peixuan.xie on 2017/1/12.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    DrawerLayoutAndroid,
    TouchableOpacity,
    View,
}from 'react-native';

/*DrawerLayoutAndroid 是Android平台的抽屉式组件

属性：

drawerBackgroundColor

    指定抽屉的背景颜色。
    默认值为白色。
    若要设置抽屉的不透明度,请使用rgba。
    drawerBackgroundColor="rgba(188,0,202,0.5)"

drawerWidth

    指定抽屉从屏幕边缘拖进的视图宽度。
    drawerWidth={230}

drawerPosition

    指定抽屉可以从屏幕的哪一边滑入,可选参数：
    DrawerLayoutAndroid.positions.Left
    DrawerLayoutAndroid.positions.Right
    drawerPosition={DrawerLayoutAndroid.positions.Left}

drawerLockMode

    设置抽屉的锁定模式,三种模式

    unlocked：不锁定，可以响应打开和关闭操作，默认值;
    locked-losed：抽屉保持关闭，不能用手势打开
    locked-open：抽屉保持打开，不能用手势关闭;
    drawerLockMode='locked-open'

keyboardDismissMode

    设置拖动过程中是否隐藏软键盘,可选值有

    none：不隐藏,默认值
    on-drag：拖动时隐藏
    keyboardDismissMode="on-drag"

statusBarBackgroundColor

    使抽屉占满整个屏幕，并设置状态栏颜色(支持API21+/安卓系统5.0以上)
    statusBarBackgroundColor='red'

onDrawerStateChanged

    抽屉的状态变化时调用此回调函数

    Idle：空闲状态，即没有发生任何交互；
    Dragging：正在拖动状态，用户正在进行交互；
    Settling：依靠中状态，用户刚刚结束交互;

    onDrawerStateChanged={(state)=>this._DrawerStateChanged(state)}

onDrawerOpen

    每当导航视图（抽屉）被打开之后调用此回调函数
    onDrawerOpen={()=>{console.log('打开了')}}

onDrawerClose

    每当导航视图（抽屉）被关闭之后调用此回调函数
    onDrawerClose={()=>{console.log('关闭了')}}

onDrawerSlide

    每当导航视图（抽屉）产生交互的时候调用此回调函数
    onDrawerSlide={()=>console.log("正在交互......")}

renderNavigationView

    用于渲染一个可以从屏幕一边拖入的导航视图
    renderNavigationView={() => navigationView}



    */
export default class Com_DrawerLayoutAndroid extends Component {

    render() {

        // navigationView视图中如果设置了backgroundColor,会覆盖drawerBackgroundColor
        var navigationView = (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>I'm in the Drawer!</Text>
                <Text style={{marginTop: 10,marginLeft:20,fontSize: 15, textAlign: 'left'}}>1.功能1</Text>
                <Text style={{marginTop: 10,marginLeft:20,fontSize: 15, textAlign: 'left'}}>2.功能2</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                ref={'drawerLayout'}
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerOpen={()=>{console.log('打开了')}}
                onDrawerClose={()=>{console.log('关闭了')}}
                onDrawerSlide={()=>console.log("正在交互......")}
                >
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <TouchableOpacity onPress={() =>this.open()}>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    </TouchableOpacity>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    open() {
        this.refs.drawerLayout.openDrawer()
    }

    close(){
        this.refs.drawerLayout.closeDrawer()
    }
}

AppRegistry.registerComponent('Com_DrawerLayoutAndroid', () => Com_DrawerLayoutAndroid);