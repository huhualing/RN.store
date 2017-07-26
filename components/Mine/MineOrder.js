/**
 * Created by Administrator on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
//待付款,待使用,评价退货等操作
var Dimensions =require("Dimensions");
var width = Dimensions.get("window").width;
var MineOrder = React.createClass({

    render:function(){
        return (


                <View style={style.orderView} >
                                 <Image style={style.iconStyle} source={{uri:this.props.icon}}/>
                                  <Text>{this.props.title}</Text>
                              </View>


        );
    },
    //renderOrder:function(){
    //    var arr =[];
    //    var img =["orderone","ordertwo","orderthree","orderfour"];
    //    var titles = ["待付款","待使用","待评价","退款/售后"];
    //    for(var i= 0;i<4;i++){
    //        arr.push(
    //            <View style={style.orderView} key={i}>
    //                <Image style={style.iconStyle} source={{uri:img[i]}}/>
    //                <Text>{titles[i]}</Text>
    //            </View>
    //        )
    //    }
    //    console.log(arr);
    //    return arr;
    //}
});
var style = StyleSheet.create({

    orderView:{
        alignItems:"center",

    },
    iconStyle:{
        width:30,
        height:25
    }
});



module.exports = MineOrder;