/**
 * 主页，也就是Tab页，App的入口
 * 
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Wenda = require('./Wenda.js');
class RNMomia extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'home'
    };

  }
  render() {

    return (
      <TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="Home"
    renderIcon={() => <Image style={{width: 20,height: 20}}/>}
    renderSelectedIcon={() => <Image style={{width: 20,height: 20}} />}
    badgeText="1"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <Wenda />
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'profile'}
    title="Profile"
    renderIcon={() => <Image style={{width: 20,height: 20}} />}
    renderSelectedIcon={() => <Image style={{width: 20,height: 20}} />}
    onPress={() => this.setState({ selectedTab: 'profile' })}>
     <View>
      <Text>Hello ,Tab 2</Text>
    </View>
  </TabNavigator.Item>
</TabNavigator>
    );
  }
}

module.exports = RNMomia;
