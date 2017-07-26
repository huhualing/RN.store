/**
 * Created by Administrator on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var MineHeader = React.createClass({

    render:function(){
        return (

                <View style={style.contain}>
                    <Image source={{uri:"icon_message"}} style={style.headerImg}/>
                    <Image source={{uri:"icon_mine_setting"}} style={style.headerImg}/>
                </View>

        );
    }
});
 var style = StyleSheet.create({
     contain:{
         height:40,
         flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center",
         backgroundColor:"#f15934"

     },
     headerImg:{
         width:25,
         height:25,
         marginLeft:10,
         marginRight:10
     }
 });



module.exports = MineHeader;