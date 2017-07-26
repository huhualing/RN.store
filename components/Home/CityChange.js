/**
 * Created by Administrator on 2017/6/21.
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
var  CityAll =require("./CityAll.js");

var CityChange = React.createClass({
    getInitialState:function () {
        return {
            city:"厦门"
        }
    },
    render:function(){
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.press}>
            <Text style={HomeStyle.homeHeaderCity}>{this.state.city}</Text>
            </TouchableOpacity>
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
        }

});
var HomeStyle = StyleSheet.create({
    homeHeaderCity:{
        fontSize:15,
        color:"#fff"

    }
});



module.exports = CityChange;
