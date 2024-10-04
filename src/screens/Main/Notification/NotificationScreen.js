import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import HeaderMain from '../../../components/Header/HeaderMain';

const NotificationScreen = ({navigation}) => {
    return (
        <View style={styles.page}>
            <HeaderMain title={'Notifications'}/>
            <View>
                <Text>NotificationScreen</Text>
            </View>
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    page:{
        paddingHorizontal:20,
        paddingTop:20,
        flex:1,
        backgroundColor:'#F9F9F9'
    }
});