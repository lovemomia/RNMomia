
let React = require('react');
let ReactNative = require('react-native');

 var {
 	AppRegistry,
 	StyleSheet,
 	View,
 	Text,
 	ListView,
 	TouchableHighlight
 } = ReactNative;

var RefreshableListView = require("./Components/RefreshableListView");

var CourseComponent = React.createClass({

 	getInitialState: function() {
 		return {
 		};
 	},

 	_renderRowView: function(rowData) {
    return (
      <TouchableHighlight
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <Text>Hello row</Text>
      </TouchableHighlight>
    );
  	},

  	_onFetch: function(page = 1, callback, options) {
  		setTimeout(() => {
      		var header = 'Header '+page;
      		var rows = {};
      		rows[header] = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      		if (page === 5) {
        		callback(rows, {
          			allLoaded: true, // the end of the list is reached
        		});
      		} else {
        		callback(rows);
      		}
    	}, 1000); // simulating network fetching
  	},

  	_onPress: function(rowData) {
  		console.log(rowData);
  	},


  listViewOnRefresh: function(page ,callback) {

    callback([1,2,3], {allLoaded: true})
  },

  renderListViewRow: function(row){
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    );
  },

 	render: function() {

 		return (
 			<View style={{flex: 1}}>
         <RefreshableListView renderRow={(row)=>this.renderListViewRow(row)}
                              onRefresh={(page, callback)=>this.listViewOnRefresh(page, callback)}
                              backgroundColor={'#F6F6EF'}
                              loadMoreText={'Load More...'}/>
 			</View>
 		);
 	},

 });

 module.exports = CourseComponent;