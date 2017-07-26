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
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Navigator from 'react-native-deprecated-custom-components';
var TopMenu = require("./TopMenu.js");
var CityChange = require("./CityChange.js");
var  CityAll =require("./CityAll.js");
var  HomeHotList =require("./HomeHotList.js");
var  HomeMoreList =require("./HomeMoreList.js");
var  BusinessList =require("./BusinessList.js");
var  YourEnjoy =require("./YourEnjoy.js");
var Home = React.createClass({
    getInitialState:function () {
        return {
            city:"厦门"
        }
    },

    render :function(){
        return(
            <View >
        {/*顶部*/}
        {this.renderHeader()}

                <View style={HomeStyle.container}>
                    <ScrollView>
                        {/*小标题10个*/}
                        {this.TopMenu()}
                        {/*中间热门广告*/}
                        {this.homeList()}
                        {/*中间4格广告*/}
                        {this.homeMoreList()}
                        {/*商业圈*/}
                        {this.businessList()}
                        {/*猜你喜欢*/}
                        {this.yourEnjoy()}
                    </ScrollView>
                </View>
            </View>
        );

    },
    renderHeader:function(){
        return(
            <View style={HomeStyle.homeHeaderSy}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.press}>
                    <Text style={HomeStyle.homeHeaderCity}>{this.state.city}</Text>
                </TouchableOpacity>
                <Text style={HomeStyle.homeHeaderTxt}>厦门电商</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image style={HomeStyle.homeHeaderImg} source={{uri:"icon_homepage_scan"}}/>
                </TouchableOpacity>

            </View>
        );
    },
    TopMenu:function() {
        return (
            <TopMenu/>
        );
    },
    press:function () {
        // 切换到下个页面上
        var obj = {city:this.state.city,change:this.changeTxt};
        this.props.navigator.push({
            component:CityAll,
            title:"xx",
            passProps:obj
        });
    },
    changeTxt:function (cityName) {
        this.setState({
            city:cityName
        });
    },
    homeList:function(){
        return (
            <HomeHotList/>
        );
    },
    homeMoreList:function () {
        return (
            <HomeMoreList/>
        );
    },
    businessList:function () {
        return (
            <BusinessList/>
        );
    },
    yourEnjoy:function () {
        return (
            <YourEnjoy/>
        );
    }
    

});
var HomeStyle = StyleSheet.create({
    container:{
        backgroundColor:"#eee"
    },
    homeHeaderSy:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fc643f",
        paddingLeft:15,
        paddingRight:15
    },
    homeHeaderCity:{
        fontSize:15,
        color:"#fff"

    },
    homeHeaderTxt:{
        fontSize:16,
        color:"#565454"
    },
    homeHeaderImg:{
        height:25,
        width:25
    }
})
module.exports = Home;