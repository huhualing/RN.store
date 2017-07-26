

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
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var SomeHeader = React.createClass({

    render:function(){
        return (
            <View style={HeaderStyle.HeaderBack}>
                <View style={HeaderStyle.HeaderAll}>
                    <Image style={HeaderStyle.HeaderImg} source={{uri:this.props.leftImg}}/>
                    <Text style={HeaderStyle.HeaderLeftTxt}>{this.props.leftTxt}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.6}>
                <View style={HeaderStyle.HeaderAll}>
                    <Text style={HeaderStyle.HeaderRightTxt}>{this.props.rightTxt}</Text>
                    <Image style={HeaderStyle.HeaderRightImg} source={{uri:"icon_cell_rightarrow"}}/>
                </View>
                </TouchableOpacity>
            </View>
        );
    }



});
var HeaderStyle = StyleSheet.create({

    HeaderBack:{
        width:width,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:5,
        paddingRight:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    HeaderAll:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    HeaderLeftTxt:{
        color:"#000",
        fontSize:16,
        fontWeight:"400"
    },
    HeaderRightTxt:{
        color:"#aaa",
        fontSize:16,
        marginRight:5
    },
    HeaderImg:{
        height:20,
        width:20,
        marginRight:5
    },
    HeaderRightImg:{
        height:15,
        width:8
    }
});



module.exports = SomeHeader;
