'use strict';
import * as types from '../constants/ActionTypes';

let user={
    'name':'admin',
    'age':'24'
}

export function doLogin(){
    return dispatch=>{
        dispatch(isLogining());
        let result=fetch('http://www.baidu.com').then((res)=>{
            dispatch(loginSuccess(true,user));
        }).catch((e)=>{
            dispatch(loginSuccess(true,user));
        })
    }
}

//正在登录
function isLogining(){
    return{
        type:types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess,user){
    return{
        type:types.LOGIN_IN_DONE,
        isSuccess:isSuccess,
        user:user
    }
}