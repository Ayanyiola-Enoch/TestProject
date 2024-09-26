import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMain from '../../../components/Header/HeaderMain';

const CartDetails = () => {
  return (
    <View style={styles.page}>
        <HeaderMain title={'My Cart'}/>
    </View>
  );
};

export default CartDetails;

const styles = StyleSheet.create({
    page:{
        flex:1,
        paddingTop:20, 
        paddingHorizontal:20,
    },
});