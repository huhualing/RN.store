

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    Button
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var enjoy =  require("../../LocalData/YourEnjoy.json");
var enjoyData = enjoy.data;
var YourEnjoy = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:function (r1,r2) {
                return r1 !==r2;
            }
        });
        ds = ds.cloneWithRows(enjoyData);
        return{
            dataSource:ds,
            index:5
        };
    },
    render:function(){
        return (
            <View>
                <View style={YourEnjoyStyle.YourEnjoyStyleBack}>
                    {/*设定导航条*/}
                    {this.renderNav()}
                    {this.goodsList()}
                </View>
                <View>
                    {this.YourEnjoyMore()}
                    {this.YourEnjoyAll()}
                </View>
            </View>
        );
    },
    renderNav:function () {
        return (
            <View style={YourEnjoyStyle.navContainer}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={{uri:"icon_shop_local"}} style={YourEnjoyStyle.iconStyle}/>
                </TouchableOpacity>
                <Text style={YourEnjoyStyle.titStyle}>商家</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={{uri:"icon_shop_search"}} style={YourEnjoyStyle.iconStyle} />
                </TouchableOpacity>
            </View>
        );
    },
    goodsList:function () {
        return(
            <View>
                {/*在listView之上去添加一个View*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    pageSize={this.state.index}
                />
            </View>
        );
    },
    renderRow:function (rowData) {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={YourEnjoyStyle.Goodsback}>
                    <Image style={YourEnjoyStyle.GoodsImg} source={{uri:rowData.img}}/>
                    <View>
                        <View style={YourEnjoyStyle.goodsRight}>
                            <Text style={YourEnjoyStyle.goodsTitle}>{rowData.title}</Text>
                            <Text style={YourEnjoyStyle.goodsDistance}>{">"+rowData.distance}</Text>
                        </View>
                        <View style={YourEnjoyStyle.goodsRight}>
                            <Text style={YourEnjoyStyle.goodsSubTitle}>{rowData.subTitle}</Text>
                        </View>
                        <View style={YourEnjoyStyle.goodsRight}>
                            <Text style={YourEnjoyStyle.goodsPrice}>{"¥"+rowData.price}</Text>
                            <Text>{"已售"+rowData.selled}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    YourEnjoyMore:function () {
        return(
            <TouchableOpacity activeOpacity={0.6} onPress={this.press}>
                <View style={YourEnjoyStyle.goodsMore} >
                    <Text style={YourEnjoyStyle.goodsMoreTxt}>{"查看更多商品"}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    press:function () {
        this.setState({
            index:10
        })
    },
    YourEnjoyAll:function () {
        return(

            <View style={YourEnjoyStyle.goodsAll} >
                <Text style={YourEnjoyStyle.goodsAllTxt}>{"需要查找更多的商品么"}</Text>
                <Text style={YourEnjoyStyle.goodsAllTxt}>{"请点击按钮"}</Text>
                <TouchableOpacity activeOpacity={0.6} onPress={this.intoBusiness}>
                    <View style={YourEnjoyStyle.goodsAllBt} >
                        <Text style={YourEnjoyStyle.goodsAllBtTxt}>{"点击了解更多"}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    },
    intoBusiness:function () {

    }


});
var YourEnjoyStyle = StyleSheet.create({
    YourEnjoyStyleBack:{
        backgroundColor:"#fff",
        marginBottom:10,
        width:width,

    },
    navContainer:{
        height:44,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomColor:"#ccc",
        borderBottomWidth:1
    },
    titStyle:{
        fontSize:20,
        color:"#000"
    },
    iconStyle:{
        width:23,
        height:23,
        marginLeft:12,
        marginRight:12
    },
    Goodsback:{
        width:width,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:8,
        paddingRight:40,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    },
    GoodsImg:{
        width:100,
        height:80,
        borderRadius:5,
        marginRight:10
    },
    goodsRight:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
        paddingRight:40,
        width:260
    },
    goodsTitle:{
        fontSize:16,
        color:'#000'

    },
    goodsDistance:{
        fontSize:12,
        color:"#bbb"
    },
    goodsPrice:{
        fontSize:16,
        color:'#fd552b'

    },
    goodsSubTitle:{
        fontSize:14,
        color:"#bbb"
    },
    goodsMore:{
        width:width-20,
        backgroundColor:"#fff",
        padding:5,
        alignItems:"center",
        marginLeft:10,
        borderWidth:1,
        borderColor:"#ddd",
        borderRadius:5,
        marginBottom:10
    },
    goodsMoreTxt:{
        fontSize:16,
        color:'#fd552b'
    },
    goodsAll:{
        width:width-20,
        backgroundColor:"#fff",
        padding:20,
        alignItems:"center",
        marginLeft:10,
        borderWidth:1,
        borderColor:"#ddd",
        borderRadius:5,
        marginBottom:90
    },
    goodsAllTxt:{
        fontSize:14,
        color:"#bbb",
        marginBottom:5
    },
    goodsAllBt:{
        width:300,
        backgroundColor:'#fd552b',
        alignItems:"center",
        paddingTop:5,
        paddingBottom:5,
        borderRadius:5
    },
    goodsAllBtTxt:{
        color:"#fff",
        fontSize:15,
    }

});



module.exports = YourEnjoy;
