import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'


const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default function InputWithButton (props)
{
    const { onPress, buttonText, editable = true} = props

    const containerStyles = [styles.container]

    if (editable === false)
    {
        containerStyles.push(styles.containerDisabled)
    }

    const buttonTextStyle = [ styles.buttonText]

    if (props.textColor)
    {
        buttonTextStyle.push({color: props.textColor})

    }

    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={buttonTextStyle}>{buttonText}</Text>
            </TouchableOpacity>
            <View style={styles.border}/>
            <TextInput style={styles.input} {...props}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222941',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },

    containerDisabled: {
        backgroundColor: '#5B666A'
    },

    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04C66D',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '#222941',
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '#fff',
    },

    border:{
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '#222941',
    }
})