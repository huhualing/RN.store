/**
 * Created by Administrator on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
var SomeHeader = require("./SomeHeader.js");
var BusinessAy = require("./BusinessAy.js");
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var shop = require("../../LocalData/ShopCenterShops.json");
var shops = shop.data;
var BusinessList = React.createClass({

    render:function(){
        return (

            <View style={BusinessStyle.BusinessBack}>
                {this.BusinessHeader()}
                {this.BusinessAll()}
            </View>
        );
    },
    BusinessHeader:function () {
        return(
           <SomeHeader leftImg="gwzx" leftTxt="购物中心" rightTxt="全部4家"/>
        );
    },
    BusinessAll:function () {
        return(
            <View>
                <ScrollView
                    ref="sv"
                    style={BusinessStyle.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onScrollBeginDrag={this.dragStart}
                    onScrollEndDrag={this.dragEnd}
                >
                    {this.BusinessScroll()}
                </ScrollView>
            </View>
        );
    },
    BusinessScroll:function () {
        var arr =[];
        for(var i = 0;i<shops.length;i++){
            var data = shops[i];
            arr.push(
                <BusinessAy key={i} data={data}/>
            )

        }
        return arr;
    },
    dragStart:function(e){
        // 当拖拽开始时，获取起始点的x位置
        this.startX = e.nativeEvent.contentOffset.x;
    },
    dragEnd:function(e){
        // 获取手指离开时,滚动过的距离
        var x = e.nativeEvent.contentOffset.x;
        // 根据滚动过的距离,计算出当前的页数
        var pageIndex = x/160;
        // 打印查看pageIndex这个数值
        pageIndex = (x>this.startX)?Math.ceil(pageIndex):Math.floor(pageIndex);
        // 获取所需的scrollview组件
        var scrollView = this.refs.sv;
        // 设定scrollView滚动
        scrollView.scrollTo({x:pageIndex*160,y:0,animated:true})
    }
});
var BusinessStyle = StyleSheet.create({
    BusinessBack:{
        backgroundColor:"#fff",
        marginBottom:10,
        width:width
    },
    scrollViewStyle:{
        width:width
    }

});



module.exports = BusinessList;
