import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class ListItem extends Component
{
    render() 
    {
        const {text, onPress, selected} = this.props
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.row}>
                    <Text style={styles.text}>{text}</Text>
                    {selected ? <Ionicons name="md-checkmark-circle" size={32} color="green" /> : null}
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    text: {
        fontSize: 16,
        color: '#222941'
    },

})


export default ListItem;