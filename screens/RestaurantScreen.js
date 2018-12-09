import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Contexts
import AppStateContext from '../contexts'

class RestaurantScreen extends Component {
    componentDidMount() {
        console.log()
    }
  render() {
    return (
        <AppStateContext.Consumer>
            {
                (value) => {
                    console.log(value)
                    return (
                        <View style={styles.container}>
                            <Text>Restaurant List Screen {value}</Text>
                        </View>
                    )
                }
            }
        </AppStateContext.Consumer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RestaurantScreen;
