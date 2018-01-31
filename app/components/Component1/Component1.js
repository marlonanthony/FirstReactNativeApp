import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Component1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Marlon',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'How you doin'
    }

  render(){
      let name = this.state.showName ? this.state.name : 'A man has no name';
    return(
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);