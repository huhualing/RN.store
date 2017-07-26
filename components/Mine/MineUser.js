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

var MineUser = React.createClass({

    render:function(){
        return (

            <View style={[style.container,{borderRightWidth:1-this.props.wd}]} >
                <Text style={style.txtStyle}>{this.props.num}</Text>
                <Text style={style.txtStyle}>{this.props.title}</Text>
            </View>

        );
    }
});
var style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        borderRightColor:"#fff"
    },
    txtStyle:{
        color:"#fff",
        fontSize:15
    }
});



module.exports = MineUser;