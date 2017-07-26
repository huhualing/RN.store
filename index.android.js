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
    ScrollView,
    Image,
    AsyncStorage

} from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
var Guide = require("./components/Main/Guide.js");
var Launch = require("./components/Main/Launch.js");
    var Change = React.createClass({
        getInitialState:function () {
            return {
                st:"guide",
                component:Guide
            }
        },
        componentDidMount:function () {
            AsyncStorage.getItem("isFirst")
                .then((value)=>{
                    console.log("value = " + value);
                    if(value=="y"){
                        this.setState({
                            st:value,
                            component:Launch
                        });
                    }
                })
        },
        render:function () {
            // alert("cccc");
            if(this.state.st=="guide"){
                return (<View></View>);
            }else{
                return (
                    <Navigator.Navigator
                        initialRoute={{name: this.state.st,component:this.state.component}}
                        configureScene={(route) => {
                            return Navigator.Navigator.SceneConfigs.HorizontalSwipeJump;
                        }}
                        renderScene={(route,navigator)=>{
                            var CP = route.component;
                            return <CP {...route.passProps}
                                       navigator={navigator}/>
                        }}/>
                );
            }
        }

    })

AppRegistry.registerComponent("test3", () => Change);
