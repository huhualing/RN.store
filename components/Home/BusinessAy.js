

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
var BusinessAy = React.createClass({
    render:function(){
        return (
        <TouchableOpacity activeOpacity={0.6}>
            <View style={BusinessAyStyle.BusinessAyBack}>
               <View style={BusinessAyStyle.BusinessAyPos}>
                   <Image style={BusinessAyStyle.BusinessAyImg} source={{uri:this.props.data.shopImage}}/>
                   <Text style={BusinessAyStyle.BusinessAyImgTxt}>{this.props.data.saleCount+'家商家'}</Text>
               </View>
                <Text style={BusinessAyStyle.BusinessAyTxt}>{this.props.data.shopName}</Text>
            </View>
        </TouchableOpacity>
        );
    }



});
var BusinessAyStyle = StyleSheet.create({
    BusinessAyBack:{
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:8,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
    },
    BusinessAyPos:{
        position:"relative",
        marginBottom:10
    },
    BusinessAyImg:{
        width:130,
        height:80,
        borderRadius:5
    },
    BusinessAyImgTxt:{
        position:"absolute",
        bottom:10,
        left:0,
        fontSize:12,
        backgroundColor:"#ffa500",
        padding:2,
        color:"#fff"
    },
    BusinessAyTxt:{
        fontSize:16,
        color:"#000"
    }
});



module.exports = BusinessAy;
