/**
 * Created by Administrator on 2017/7/13.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    AsyncStorage
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;


var imgs = ["../../images/Guide01.png","../../images/Guide02.png","../../images/Guide03.png"];
var Launch = require("./Launch.js");

var Guide = React.createClass({
    render:function () {
        return (
            <View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {/*书写引导页面*/}
                    {this.renderGuide()}
                </ScrollView>
            </View>
        )
    },
    renderGuide:function () {
        var arr = [];
        for(var i=0;i<imgs.length;i++){
            if(i<imgs.length-1){
                arr.push(
                    <View key={i}>
                        <Image source={require(imgs[i])}
                               style={GuideStyle.guideIconStyle}
                        />
                    </View>
                );
            }else{
                arr.push(
                    <View key={i} style={{position:"relative"}}>
                        <Button
                            onPress={this.loadLaunch}
                            title="开始体验"
                            color="#841584"
                            style={GuideStyle.startStyle}
                        />
                        <Image source={require(imgs[i])}
                               style={GuideStyle.guideIconStyle}
                        />

                    </View>
                );
            }

        }
        return arr;
    },
    loadLaunch:function () {
        // 当点击发生时，将第一次打开这个应用的状态保存起来
        AsyncStorage.setItem("isFirst","y",
            (error,success)=>{
                if(!error){
                    alert("数据存储成功");
                }
            })
        this.props.navigator.replace({
            component:Launch
        });
    }
});

var GuideStyle = StyleSheet.create({
    guideIconStyle:{
        width:width,
        height:height
    },
    startStyle:{
        width:60,
        height:30,
        position:"absolute",
        left:0,
        top:0,
        backgroundColor:"red"
    }
});


module.exports = Guide;