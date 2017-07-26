
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var topMiddle = require("../../LocalData/HomeTopMiddleLeft.json");
var HotListData = require("./HotListData.js");
var dataLeft = topMiddle.dataLeft;
var dataRight = topMiddle.dataRight;
var HomeHotList = React.createClass({

    render:function(){
        return (
            <TouchableOpacity
                activeOpacity={0.6}
               >
                <View style={HotListStyle.hotListBack}>
                        {this.renderLeft()}

                        {this.renderRight()}


                </View>

            </TouchableOpacity>
        );
    },
    renderLeft:function () {
        console.log(dataLeft);
        return(

            <View style={HotListStyle.listLeftBack}>
                <Image style={HotListStyle.headerLeftIconStyle} source={{uri:dataLeft[0].img1}}/>
                <Image style={HotListStyle.headerLeftIconStyle} source={{uri:dataLeft[0].img2}}/>
                <Text style={HotListStyle.listLeftTitle}>{dataLeft[0].title}</Text>
                <View style={HotListStyle.listLeftPs}>
                    <Text style={HotListStyle.listLeftTitle}>{dataLeft[0].price}</Text>
                    <Text style={HotListStyle.listLeftSale}>{dataLeft[0].sale}</Text>
                </View>
            </View>
        )
    },
    renderRight:function () {
        return(
            <View style={HotListStyle.hotRightBack}>
                {this.renderRightData()}
            </View>
        )
    },
    renderRightData:function () {
        var arr = [];

        for(var i=0;i<dataRight.length;i++){
            var dt = dataRight[i];

                arr.push(
                    <HotListData key={i} data={dt} index={i}/>
                )


        }
        return arr;

    }




});
var HotListStyle = StyleSheet.create({
    hotListBack:{
        height:130,
        width:width,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-around",
        borderTopWidth:1,
        borderTopColor:"#ddd",
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
        marginBottom:12
    },
    listLeftBack:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderRightWidth:1,
        borderRightColor:"#ddd"

    },
    borderBT:{
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
    },
    listLeftTitle:{
        fontSize:14,
        color:"#bbb",

    },
    listLeftPs:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:80,
    },
    listLeftPrice:{
        fontSize:12,
        color:"#6ed5cb",
    },
    listLeftSale:{
        fontSize:12,
        color:"#ffc600",
        backgroundColor:"#ffff00",
        borderRadius:6
    },

    headerLeftIconStyle:{
        width:100,
        height:40,
        resizeMode:"contain",

    },
    hotRightBack:{
        flex:1,
        justifyContent:"space-around"

    }
});



module.exports = HomeHotList;
