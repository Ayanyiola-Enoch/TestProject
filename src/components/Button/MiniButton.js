import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';

const MiniButton = ({ title }) => {
    return (
        <TouchableOpacity style={styles.SmallButton}>
            <Text style={{ fontSize: 13, color: 'black' }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MiniButton;

const styles = StyleSheet.create({
    SmallButton: {
        backgroundColor: '#C2C3C4',
        width: 66,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
});