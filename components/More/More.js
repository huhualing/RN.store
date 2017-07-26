/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
var MoreContent = require("./MoreContent.js")
var More =React.createClass({


    render:function(){
        return (
            <View  style={style.BackStyle}>

                {this.renderTitle()}
                {/*渲染内容*/}
                <ScrollView>
                {this.renderContent()}
                {this.renderTools()}
                 {this.renderUser()}
                    {this.renderAny()}
                    </ScrollView>
            </View>
        );
    },
    renderTitle:function(){
        return(
            <View style={style.NavStyle}>
                <Text  style={style.titStyle}>更多</Text>
            </View>
        );
    },
    renderContent:function(){
        return(
            <View style={style.MarginBt}>
                <MoreContent title="扫一扫" />
            </View>
        );
    },

    renderTools:function(){
       return(
            <View style={style.MarginBt}>
                <MoreContent title="省流量模式" type="swtich" />
                <MoreContent title="消息提醒" />
                <MoreContent title="邀请好友使用" />
                <MoreContent title="清空缓存" type="clean"/>
            </View>

        );
    },
    renderUser:function(){
        return(
            <View style={style.MarginBt}>
                <MoreContent title="意见反馈" />
                <MoreContent title="问卷调查" />
                <MoreContent title="支付帮助" />
                <MoreContent title="网络诊断" />
                <MoreContent title="关于马团" />
                <MoreContent title="我要应聘" />
            </View>

        );
    },
    renderAny:function(){
        return(
            <View style={style.MarginBt}>
                <MoreContent title="精品应用" />
                <MoreContent title="邀请好友" />
                <MoreContent title="查看更多" />
            </View>

        );
    }
})
const style =  StyleSheet.create({
    BackStyle: {
        backgroundColor: "#eee"

    },
    NavStyle:{
        height:40,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderBottomColor:"#ccc",
        borderBottomWidth:1

    },
    titStyle: {
        color: "black",
        fontSize:20
    },
    MarginBt:{
        marginTop:10
    }
});
module.exports = More;