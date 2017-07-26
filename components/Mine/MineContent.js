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

var MineContent = React.createClass({

    render:function(){
        return (

           <View style={[style.contain,{marginTop:12-this.props.mtp}]}>
               {this.contentLeft()}
               {this.contentRight()}
           </View>

        );
    },
    contentLeft:function() {
        return (
            <View style={style.leftRightStyle}>
                <Image source={{uri:this.props.leftIcon}} style={style.iconStyle}/>
                <Text style={style.titStyle}>{this.props.title}</Text>
            </View>
        );
    },
    contentRight:function() {
        if(!this.props.New){
            return (

                <View style={style.leftRightStyle}>
                    <Text style={style.descStyle}>{this.props.desc}</Text>
                    <Image source={{uri:"icon_cell_rightarrow"}} style={style.rightIconStyle}/>
                </View>
            );
        }else{
            return (

                <View style={style.leftRightStyle}>
                   <Image source={{uri:"me_new"}} style={style.newIconStyle}/>
                    <Image source={{uri:"icon_cell_rightarrow"}} style={style.rightIconStyle}/>
                </View>
            );

        }


    }

});
var style = StyleSheet.create({
    contain:{
            height:44,
            flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
    },
    leftRightStyle:{
        flexDirection:"row",
        alignItems:"center"
    },
    iconStyle:{
        width:26,
        height:26,
        borderRadius:13,
        marginLeft:10,
        marginRight:6
    },
    rightIconStyle:{
        width:10,
        height:10,
        marginLeft:6,
        marginRight:10
    },
    newIconStyle:{
        width:25,
        height:15,
        borderRadius:10
    },
    titStyle:{
        fontSize:16,
        color:"black"
    },
    descStyle:{
        color:"#6D6D6D",
        fontSize:12
    }

});



module.exports = MineContent;