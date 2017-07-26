import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView
} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
var CityAll = React.createClass({
    getInitialState:function () {
        var cities = ["厦门","深圳","广州","北京","上海","杭州"];
        var ds = new ListView.DataSource({
            rowHasChanged:function (r1,r2) {
                return r1!==r2;
            }
        });
        return {
            dataSource:ds.cloneWithRows(cities)
        }
    },
    render:function(){
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                />
            </View>
        );
    },
    renderHeader:function () {
        return (
            <Text style={{fontSize:20}}>当前的城市：{this.props.city}</Text>
        );
    },
    renderRow:function (rowData) {
        return (
            <TouchableOpacity onPress={this.press(rowData)}>
                <Text style={{fontSize:30}}>{rowData}</Text>
            </TouchableOpacity>
        );
    },
    press:function (rowData) {
        var that = this;
        return function(){
            that.props.navigator.pop();
            that.props.change(rowData);
        }
    }
});
module.exports=CityAll;


