import React, { Component } from 'react';
import authenticateUser from './utils'

const CurrencyContext = React.createContext({
    myCurrencyData: 'USD',
    localCurrencyData: 'GBP',
    changeMyCurrencyData: () => null

})

export const CurrencyContextConsumer = CurrencyContext.Consumer

export class Provider extends Component {

    state = {
        myCurrencyData: 'USD',
        localCurrencyData: 'GBP',
    };

    changeMyCurrencyData = (myCurrencyData) => {
        console.log(myCurrencyData)
        this.setState({myCurrencyData})
    }


    render () {
        return (
            <CurrencyContext.Provider value={{
                myCurrencyData: this.state.myCurrencyData,
                localCurrencyData: this.state.localCurrencyData,
                changeMyCurrencyData: this.changeMyCurrencyData,
            }} >
                {this.props.children}
            </CurrencyContext.Provider>
        )
    }
}

export default CurrencyContext