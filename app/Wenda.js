/**
 * 问答页面
 * 
 */

 let React = require('react');
 let ReactNative = require('react-native');

 var {
 	AppRegistry,
 	StyleSheet,
 	View,
 	Text
 } = ReactNative;

 var WendaComponent = React.createClass({


 	getInitialState: function() {
 		return {
 		};
 	},

 	render: function() {

 		return (
 			<View style={{flex: 1,alighItems: 'center'}} >
 				<Text> Hello,Wenda</Text>
 			</View>
 		);
 	},

 });

 module.exports = WendaComponent;