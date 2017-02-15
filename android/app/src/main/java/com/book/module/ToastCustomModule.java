package com.book.module;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by peixuan.xie on 2017/2/14.
 */

public class ToastCustomModule extends ReactContextBaseJavaModule{

    private static final String DURATION_SHORT="SHORT";
    private static final String DURATION_LONG="LONG";

    public ToastCustomModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "ToastCustomAndroid";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message,int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void getParams(){
        WritableMap writableMap = new WritableNativeMap();
        writableMap.putString("key", "111111");
        sendTransMisson(getReactApplicationContext(), "getParams", writableMap);
    }

    /**
     *RCTDeviceEventEmitter方式
     *
     * @param reactContext
     * @param eventName    事件名
     * @param params       传惨
     */
    public void sendTransMisson(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);

    }

    /**
         * CallBack方式
         *
         * @param name
         * @param callback
         */
        @ReactMethod
        public void callBackTime(String name, Callback callback) {
            callback.invoke("222222");
        }

    /**
     * Promise方式
     * @param name
     * @param promise
     */
    @ReactMethod
    public void sendPromiseTime(String name, Promise promise) {
        WritableMap writableMap=new WritableNativeMap();
        writableMap.putString("age","20");
        writableMap.putString("time","33333");
        promise.resolve(writableMap);

    }
}
