import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import currencyCodesData from 'currency-codes/data';



import ListItem from '../components/ListItem';
import Separator from '../components/Separator';

const tempCurrency = 'CAD';
class CurrencyListScreen extends Component {
  state = {
    currencies: [],
    selectedCurrency: '',
  };

  componentWillMount() {
    this.getCurrencies();
  }

  getCurrencies = () => {
    let currency = [];
    currencyCodesData.map(country => {
      currency.push(country.code);
    });

    this.setState({ currencies: currency });
  };

  handlePress = item => {

    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === tempCurrency}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Expo.Constants.statusBarHeight,
    justifyContent: 'center',
  },
});

export default CurrencyListScreen;
