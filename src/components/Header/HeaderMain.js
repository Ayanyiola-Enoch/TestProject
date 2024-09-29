import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';


{/*This is the header component of the app screens apart from the auth screen */ }

const HeaderMain = ({ title }) => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ width: 49, height: 46, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/icons/icons8-back-24.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
            <Text style={{ marginLeft: 70, fontSize: 17, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        </View>

    );
};

export default HeaderMain;

const styles = StyleSheet.create({});