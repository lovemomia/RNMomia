import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let Home = require('./app/App.js');
AppRegistry.registerComponent('RNMomia', () => Home);
