import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import currencyCodesData from "currency-codes/data";

function LightText (props)
{
    const styles = StyleSheet.create({
        text: {
            fontSize: props.size,
            color: props.color,
            backgroundColor: 'transparent',
        }
    });

    return (
        <Text style={[styles.text, props.style]}>
            {props.children}
        </Text>
    )

}

function BoldText (props)
{
    const styles = StyleSheet.create({
        bodyText: {
            fontSize: props.size,
            color: props.color,
            textAlign: 'justify',
            backgroundColor: 'transparent',
        }
    });

    return (
        <Text style={[styles.bodyText, props.style]}>
            {props.children}
        </Text>
    )

}

export default function CircleWithText (props)
{
    const size = props.size;
    const charLimit = 8;
    const styles = StyleSheet.create({
        badge: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: size,
            height: size,
            borderRadius: size / 2,
            borderStyle: 'solid',
            borderWidth: size / 25,
            borderColor: props.color,

        },
        numberText: {
            paddingTop: 50
        },
        typeTextView: {
            marginTop: size / -18,

        },
        typeText: {
            textAlign: 'center',
        }

    });

    return (
        <View style={[styles.badge, props.style]}>
            <View style={styles.numberText}>
                <BoldText  size={size / props.sizeDivider} color={props.color}>{props.numberCount}</BoldText>
            </View>
            <View style={styles.typeTextView}>
                <LightText style={styles.typeText} size={size / 6.3} color={props.color}>{props.label}</LightText>
            </View>

        </View>
    )

}


