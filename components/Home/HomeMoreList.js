/**
 * Created by Administrator on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
var  HotListData =require("./HotListData.js");
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var topMiddle = require("../../LocalData/HomeHotData.json");
var bottomData = topMiddle.bottomData;
var topData = topMiddle.topData;
var HomeMoreList  = React.createClass({
    render:function(){
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.press}>
                <View style={HomeMoreListStyle.MoreListBack}>
                {this.renderHead()}
                {this.renderListData()}
                </View>
            </TouchableOpacity>
        );
    },
    renderHead:function () {
            return(
                <View style={HomeMoreListStyle.topData}>
                    <View style={HomeMoreListStyle.topDataTxt}>
                        <Text style={HomeMoreListStyle.topDataTxtCol} >{topData[0].title}</Text>
                        <Text style={HomeMoreListStyle.topDataTxtAny}>{topData[0].subTitle}</Text>
                    </View>
                    <Image style={HomeMoreListStyle.topDataImg} source={{uri:topData[0].hotImage}}/>
                </View>
            )
    },

    renderListData:function () {
        var arr = [];

        for(var i=0;i<bottomData.length;i++){
            var dt = bottomData[i];
            arr.push(
                <HotListData key={i} data={dt} index={i}/>
            )


        }
        return arr;

    }

});
var HomeMoreListStyle = StyleSheet.create({
    MoreListBack:{
        width:width,
        backgroundColor:"#fff",
        flexDirection:'row',
        flexWrap:"wrap",
        marginBottom:10
    },
    topData:{
        width:width,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    },
    topDataTxt:{
        paddingLeft:30,
        justifyContent:"space-around"
    },
    topDataTxtCol:{
        fontSize:18,
        color:"#fb7f66",
        fontWeight:"500"
    },
    topDataTxtAny:{
        fontSize:14,
        color:"#bbb"
    },
    topDataImg:{
        width:100,
        height:50,
        resizeMode:"contain"
    }
});



module.exports = HomeMoreList;
