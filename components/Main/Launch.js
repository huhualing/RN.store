

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
var height = Dimensions.get("window").height;

var Main = require("./Main.js");

var Launch = React.createClass({
    getInitialState:function () {
        return {
            imgUrl:"../../images/Launch.png"
        };
    },
    render:function () {
        return (
            <View>
                <Image onLoad={this.load} style={{width:width,height:height,resizeMode:"contain"}} source={require(this.state.imgUrl)}/>
            </View>
        )
    },
    load:function () {
        var that = this;
        this.timer = setTimeout(function () {
            // 进入到主页面中 --> 跳转
            that.props.navigator.replace({
                component:Main
            });
        },2000)
    },
    componentDidMount:function () {

    },
    componentWillUnmount:function () {
        clearTimeout(this.timer);
    }
});

module.exports = Launch;