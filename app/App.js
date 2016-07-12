import React, { Component } from 'react';

var ReactNative = require('react-native');

import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Course = require('./Course.js');
var Profile = require('./Profile.js');
var Wenda = require('./Wenda.js');

var styles = ReactNative.StyleSheet.create({
   tab: {
    height: 52,
    alignItems: 'center',
  },
  tabIcon: {
    width: 22,
    height: 25,
    resizeMode: 'stretch'
  }
});

class RNMomia extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'activity'
    };

  }

  render() {

    return (
      <TabNavigator tabBarStyle={styles.tab} hidesTabTouch={true}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'activity'}
          title="课程"
          renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./Image/TabHomeSelect.png')} />}
          renderIcon={() => <Image style={styles.tabIcon} source={require('./Image/TabHomeNormal.png')} />}
          onPress={() => this.setState({ selectedTab: 'activity' })}>
        <Course />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'wenda'}
          title="问答"
          renderIcon={() => <Image style={styles.tabIcon} source={require('./Image/TabPlaymateNormal.png')} />}
          renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./Image/TabPlaymateSelect.png')} />}
          onPress={() => this.setState({ selectedTab: 'wenda' })}>
        <Wenda />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="我的"
          renderIcon={() => <Image style={styles.tabIcon} source={require('./Image/TabMineNormal.png')} />}
          renderSelectedIcon={() => <Image style={styles.tabIcon} source={require('./Image/TabMineSelect.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
        <Profile />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

module.exports = RNMomia;
