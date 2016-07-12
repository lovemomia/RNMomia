let React = require('react');
let ReactNative = require('react-native');

 var {
 	AppRegistry,
 	StyleSheet,
 	View,
 	Text
 } = ReactNative;

 var MineComponent = React.createClass({

 	getInitialState: function() {
 		return {
 		};
 	},

 	render: function() {

 		return (
 			<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
 				<Text> Hello,Mine</Text>
 			</View>
 		);
 	},

 });

 module.exports = MineComponent;