/**
 * Created by Administrator on 2017/6/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
// var COMMONPATH ="http://120.41.212.172:8080/";
var topMiddle = require("../../LocalData/TopMenu.json");
var allDatas = topMiddle.data;
var TopMenu = React.createClass({
   getInitialState:function(){
        return {
            allDatas:allDatas,
            curIndex:0
        }
    },

  /*  componentDidMount:function(){
        var url = COMMONPATH +"TopMenu.json";
        fetch(url).then((response)=>response.json()).then((responseData)=>{
            this.setState({
                allDatas:responseData.data
        })
        })
    },*/
    render:function(){
        return (
            <View style={TopMenuStyle.container}>
                <ScrollView
                    style={TopMenuStyle.scrollViewStyle}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.scrollEnd}
                >
                    {this.menuList()}
                </ScrollView>
                <View style={TopMenuStyle.menuIconsStyle}>
                {this.menuIcon()}
            </View>
            </View>

        );
    },
    menuList:function(){
        {/*创建2页的图标*/}
        var arr =[];
        console.log(this.state.allDatas);
        for(var i =0 ;i<this.state.allDatas.length;i++){
            arr.push(
                <View key={i} style={TopMenuStyle.menuListStyle}>
                    {/*还需要在每一个View上面去放置8个子View*/}
                    {this.menuListChild(this.state.allDatas[i])}
                </View>
            )
        }
        return arr;
    },
    menuListChild:function(data){
        var arr = [];
        for(var i =0 ;i<data.length;i++){
            arr.push(
                <View key={i}>
                    {/*还需要在每一个View上面去放置8个子View*/}
                    {this.menuListChildOne(data[i])}
                </View>
            )
        }
        return arr;
    },
    menuListChildOne:function(data){
        return (
            <View style={{alignItems:"center",width:(width/5),height:width/6,marginTop:8}}>
                <Image source={{uri:data.image}}
                       style={{width:(width/6-15),height:width/6-15}}/>
                <Text>{data.title}</Text>
            </View>
        );
    },
    menuIcon:function(){
        var arr = [];
        var color ;
        for(var i=0;i<2;i++){
            if(i==this.state.curIndex){
                color = {backgroundColor:"#eee"};
            }else{
                color = {backgroundColor:"#ccc"};
            }
            arr.push(
                <Text key={i} style={[TopMenuStyle.menuIconStyle,color]}></Text>
            )
        }
        return arr;
    },
    scrollEnd:function(e){
        // 获取手指离开时,滚动过的距离
        var x = e.nativeEvent.contentOffset.x;
        // 根据滚动过的距离,计算出当前的页数
        var pageIndex = x/width;
        // 设定state
        this.setState({
            curIndex:pageIndex
        });
    }





});
var TopMenuStyle = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
        marginBottom:12
    },
    scrollViewStyle:{
        width:width,
        marginTop:10,
    },
    menuIconsStyle:{
        width:width,
        height:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    menuListStyle:{
        width:width,
        height:150,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    menuIconStyle:{
        marginLeft:5,
        marginRight:5,
        width:8,
        height:8,
        borderRadius:10
    }
})

module.exports = TopMenu;
