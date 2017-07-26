
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';

var MoreContent = React.createClass({
    getInitialState:function () {
        return {
            checked:false
        }
    },
    render:function () {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={moreContentStyle.container}>
                    <Text style={{marginLeft:10}}>{this.props.title}</Text>
                    <View style={{marginRight:10}}>
                        {/*用于渲染右侧内容*/}
                        {this.renderRight()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
        renderRight:function () {
        if(this.props.type =="swtich"){
            return (
                <View>
                    <Switch value={this.state.checked} onValueChange={this.checkedChange} />
                </View>
            );
        }else if(this.props.type =="clean"){
            return(
                <View style={moreContentStyle.cleanView}>
                    <Text style={moreContentStyle.cleanTxt}>20.0M</Text>
                    <Image source={{uri:"icon_cell_rightarrow"}} style={moreContentStyle.Img}/>
                </View>
            );

        }else{
            return (
                <View>
                    <Image source={{uri:"icon_cell_rightarrow"}} style={moreContentStyle.Img}/>
                </View>
            );
        }

        },
    checkedChange:function(value){
        this.setState({
            checked:value
        })
    }
});

var moreContentStyle = StyleSheet.create({
    container:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderBottomColor:"#eee",
        borderBottomWidth:1
    },
    Img:{
        height:12,
        width:5
    },
    cleanView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    cleanTxt:{
        fontSize:12,
        marginRight:5
    }
});

module.exports = MoreContent;