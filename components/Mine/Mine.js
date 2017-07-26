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
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
var MineHeader = require("./MineHeader.js");
var MineContent= require("./MineContent.js");
var MineOrder= require("./MineOrder.js");
var MineUser= require("./MineUser.js");
var Dimensions =require("Dimensions");
var width = Dimensions.get("window").width;
var Mine = React.createClass({
    render:function(){
        return(
            <View style={style.backStyle}>
                {/*顶部*/}
                <MineHeader/>
                <ScrollView showsVerticalScrollIndicator={false}>
                {/*用户头像*/}
                {this.userInfor()}
                <View>
                    {/*列表*/}
                    <MineContent leftIcon="collect" title="我的订单" desc="查看全部订单" mtp="10"/>
                    <View style={style.orderContain}>
                    {this.orderMine()}
                        </View>
                </View>

                <MineContent leftIcon="draft" title="我的钱包" desc="账户余额：¥1000" mtp="0"/>
                <MineContent leftIcon="like" title="抵用券" desc="0" mtp="10"/>
                <MineContent leftIcon="card" title="积分商城" desc="" mtp="0"/>
                <MineContent leftIcon="new_friend" title="今日推荐" desc="" New="xx" mtp="0"/>
                <View style={{marginBottom:60}}>
                    <MineContent leftIcon="pay" title="我要合作" desc="轻松开店，招财进宝" mtp="0"/>
                </View>
                    </ScrollView>
            </View>
                );

    },
    orderMine:function(){
        var arr =[];
            var img =["orderone","ordertwo","orderthree","orderfour"];
            var titles = ["待付款","待使用","待评价","退款/售后"];
        for(var i=0;i<4;i++){
                arr.push(
                  <MineOrder key={i} icon={img[i]} title={titles[i]} />
                )
            }
            return arr;
    },
    userInfor:function(){
        return(
            <View style={style.userBackStyle}>
                <View style={style.userHeadStyle}>
                    <Image style={style.userIconStyle} source={{uri:"logo"}}/>
                    <Text style={style.userNameStyle}>厦门电商</Text>
                    <Image  style={style.logoVipStyle} source={{uri:"avatar_vip"}}/>
                </View>
                    <Image  style={style.userRightIconStyle} source={{uri:"icon_cell_rightarrow"}}/>
                <View style={style.userInforStyle}>
                    {this.userHave()}
                </View>
            </View>
        );
    },
    userHave:function(){
        var arr =[];
        var num =["100","12","50"];
        var titles = ["优惠券","评价","收藏"];
        var wd = 0;
        for(var i=0;i<3;i++){
            if(i==2){
                wd = 1;
            }
            arr.push(
                <MineUser key={i} num={num[i]} title={titles[i]}  wd={wd}/>
            )
        }
        return arr;
    }
});
const style = StyleSheet.create({
    backStyle:{
        backgroundColor:"#eee"
    },
    orderContain:{
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#fff",
        marginTop:2,
        paddingTop:10,
        paddingBottom:10
    },
    userBackStyle:{
        backgroundColor:"#FD4B1F",
        position:"relative",
        flexDirection:"row",
        height:160,
        alignItems:"center",
        justifyContent:"space-between"
    },
    userHeadStyle:{
        flexDirection:"row",
        alignItems:"center"
    },
    userIconStyle:{
        width:50,
        height:50,
        resizeMode:"contain",
        marginLeft:20,
        marginRight:30
    },
    userNameStyle:{
        fontSize:16,
        color:"#fff",
        marginRight:2
    },
    logoVipStyle:{
        width:20,
        height:20
    },
    userRightIconStyle:{
        width:12,
        height:12,
        marginRight:10
    },
    userInforStyle:{
        flexDirection:"row",
        position:"absolute",
        left:0,
        bottom:0,
        width:width,
        height:45,
        backgroundColor:"#F68366",
        alignItems:"center",
        justifyContent:"space-around",
        paddingTop:2,
        paddingBottom:2

    }


});
module.exports = Mine;