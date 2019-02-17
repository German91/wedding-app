import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class AccommodationScreen extends Component {
  render() {
    return (
      <View>
        <Button title="Logout" onPress={this.props.logoutUser} />
        <Text>Accommodation Screen</Text>
      </View>
    );
  }
}

export default AccommodationScreen;
