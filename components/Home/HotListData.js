/**
 * Created by Administrator on 2017/7/1.
 */
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

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;

var HotListData = React.createClass({

    render:function(){
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.press}>
              {this.renderList()}
            </TouchableOpacity>
        );
    },
    renderList:function () {
        var myStyle;
        myStyle = {color:this.props.data.titleColor};
        var borderBt;
        borderBt = this.props.index == 0?{borderBottomWidth:1}:{borderBottomWidth:0};
        var moreBt = this.props.index == 0?{borderRightWidth:1}:{borderRightWidth:0};
        if(this.props.index == 3){
           var  moreTO = {borderLeftWidth:1,borderTopWidth:1};
        }
        return(
            <View style={[HotListDataStyle.ListDataBack,borderBt,moreBt,moreTO,{width:width/2}]}>
                <View style={HotListDataStyle.ListDataTxt}>
                    <Text style={[HotListDataStyle.ListDataColTxt,myStyle]}>{this.props.data.title}</Text>
                    <Text style={HotListDataStyle.ListDataMinTxt}>{this.props.data.subTitle}</Text>
                </View>
                <Image style={HotListDataStyle.ListDataImg} source={{uri:this.props.data.rightImage}}/>
            </View>
        )
    }


});
var HotListDataStyle = StyleSheet.create({
    ListDataBack:{

        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        borderColor:"#ddd",
        borderRightWidth:1

    },
    ListDataTxt:{
        paddingLeft:10,
        justifyContent:"space-around",

    },
    ListDataColTxt:{
        fontSize:15,
        fontWeight:"400"
    },
    ListDataMinTxt:{
        fontSize:12,
        borderColor:"#bbb"
    },
    ListDataImg:{
        width:80,
        height:40,
        resizeMode:"contain"
    }
});



module.exports = HotListData;
