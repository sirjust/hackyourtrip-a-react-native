import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Picker,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import axios from 'axios'


import currencyCodesData from 'currency-codes/data';
import InputWithButton from '../components/TextInputWithButton';
import authenticateUser from "../utils";

class CurrencyScreen extends Component {
  state = {
    token:  "",
    currencies: [],
    investCurrency: 'USD',
    localCurrency: 'USD',
    investAmount: '1000',
    countryAmount: '0',
    showMyCurrency: false,
    showLocalCurrency: false,
  };






  async componentWillMount() {
    Keyboard.addListener('keyboardWillHide', (e) => this.keyboardWillHide(e))
    try {
      const token = await authenticateUser()
      this.setState({token})
    }
    catch (e) {
      console.log( `From the Context: ${e}`)
    }
    this.getCurrencies();

  }

  keyboardWillHide (e) {
    let newAmount = this.getExchangeRate(this.state.investAmount, this.state.localCurrency)
        .then( (data) => {
              this.setState({countryAmount: data.toFixed(2).toString()})
            }

        )

  }

  getCurrencies = () => {
    let currency = [];
    currencyCodesData.map(country => {
      currency.push(country.code);
    });

    this.setState({ currencies: currency });
  };

  getExchangeRate = async (amount, currencyType) => {
    try {
      const response = await axios.get(`https://api.discover.com/dci/currencyconversion/v1/exchangerate`, {
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
          "X-DFS-API-PLAN": "DCI_CURRENCYCONVERSION_SANDBOX",
          Authorization: this.state.token


        },
        params: {
          currencycd: currencyType
        }
      })

      console.log(`ExhcangeRate: ${response.data.exchange_rate}`)
      return amount / response.data.exchange_rate

    }
    catch (e) {
      console.log(e)
    }
  }


  handleYourCurrencyChange = (text) => {
    this.setState({investAmount: text })
  }

  handleMyCurrencyTypeChange = (value) => {
    this.setState({investCurrency: value, showMyCurrency: false })
  }
  handleLocalCurrencyTypeChange = async (value) => {
    let newAmount = this.getExchangeRate(this.state.investAmount, value)
        .then( (data) => {
              this.setState({countryAmount: data.toFixed(2).toString()})
        }

        )
    this.setState({localCurrency: value, showLocalCurrency: false })
  }

  render() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>

            <View>
              <InputWithButton
                  buttonText={this.state.investCurrency}
                  keyboardType={'numeric'}
                  onChangeText={this.handleYourCurrencyChange}
                  value={this.state.investAmount}
                  onPress={() => this.setState({showMyCurrency: true})}
              />
            </View>
            <View>
              <InputWithButton
                  buttonText={this.state.localCurrency}
                  editable={false}
                  value={this.state.countryAmount}
                  onPress={() => this.setState({showLocalCurrency: true})}
              />
            </View>

            {this.state.showMyCurrency
                ? <View style={styles.pickerContainer}>
                  <Picker
                      selectedValue={this.state.investCurrency}
                      style={[styles.picker]} itemStyle={styles.pickerItem}
                      onValueChange={(itemValue, itemIndex) => this.handleMyCurrencyTypeChange(itemValue)}>
                    {this.state.currencies.map((item) => <Picker.Item key={item} label={item} value={item} />)}

                  </Picker>
                  <View style={styles.arrowWrapper}>
                    <Text style={styles.arrow}>&#9660;</Text>
                  </View>
                </View>
                : null
            }
            {this.state.showLocalCurrency
                ? <View style={styles.pickerContainer}>
                  <Picker
                      selectedValue={this.state.localCurrency}
                      style={[styles.picker]} itemStyle={styles.pickerItem}
                      onValueChange={(itemValue, itemIndex) => this.handleLocalCurrencyTypeChange(itemValue)}>
                    {this.state.currencies.map((item) => <Picker.Item key={item} label={item} value={item} />)}

                  </Picker>
                  <View style={styles.arrowWrapper}>
                    <Text style={styles.arrow}>&#9660;</Text>
                  </View>
                </View>
                : null
            }



          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Expo.Constants.statusBarHeight,
  },
  bubbleContainer: {
    flexDirection: 'row',
  },
  bubble: {
    paddingHorizontal: 20,
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // alignItems: 'center',
    marginTop: 0,
  },
  picker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'red',
    borderBottomWidth: 2,
    flex: 90
  },

  pickerItem: {
    height: 44,
    color: 'red'
  },

  arrowWrapper: {
    backgroundColor: '#FFF0E0',
    flex: 10,
    height: 40,
    marginLeft: -28,
    justifyContent: 'center'
  },

  arrow: {
    textAlign: 'center',
    color: 'red',
  }
});

export default CurrencyScreen;
