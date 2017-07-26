

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';
var Home = require("../Home/Home.js");
var Business = require("../Business/Business.js");
var Mine = require("../Mine/Mine.js");
var More = require("../More/More.js");
var Main = React.createClass({
    getInitialState:function () {
        return {
            selectedTab:"home"
        };
    },
    render:function(){
        return(
            <TabNavigator>
                {/*首页*/}
                {this.renderCommon("home","首页","icon_tabbar_homepage","icon_tabbar_homepage_selected",Home)}
                {/*商家*/}
                {this.renderCommon("business","商家","icon_tabbar_merchant_normal","icon_tabbar_merchant_selected",Business)}
                {/*我的*/}
                {this.renderCommon("mine","我的","icon_tabbar_mine","icon_tabbar_mine_selected",Mine)}
                {/*更多*/}
                {this.renderCommon("more","更多","icon_tabbar_misc","icon_tabbar_misc_selected",More)}
            </TabNavigator>
        );
    },
    renderCommon:function(selectedTab,title,renderIcon,SelectedIcon,Component){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image source={{uri: renderIcon}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:SelectedIcon}} style={styles.iconStyle} />}
                onPress={() => this.setState({ selectedTab:selectedTab })}
                selectedTitleStyle={styles.selStyle}
            >

                <Navigator.Navigator
                    initialRoute={{name: selectedTab, component:Component}}
                    configureScene={(route) => {
                        return Navigator.Navigator.SceneConfigs.HorizontalSwipeJump;
                    }}
                    renderScene={(route,navigator)=>{
                        var CP = route.component;
                        return <CP {...route.passProps}
                                   navigator={navigator}/>
                    }}/>
            </TabNavigator.Item>
        );
    }
})
const styles = StyleSheet.create({
    iconStyle:{
        width:25,
        height:25
    },
    titleStyle:{
        fontSize:10
    },
    selStyle:{
        color:"#ef5100",
        fontSize:10
    }
});
module.exports = Main;

