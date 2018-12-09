import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Separator () {

    return (
        <View style={styles.separator}></View>
    )

}

const styles = StyleSheet.create({
    separator: {
        marginLeft: 20,
        backgroundColor: '#e2e2e2',
        flex:1,
        height: StyleSheet.hairlineWidth,
    }
})