import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CartItem = ({title, price, navigation}) => {
    return (
        <View style={{paddingHorizontal:14, marginTop: 20, backgroundColor:'#c2c3c4', width:161, height:170, marginRight:10 }}>
            {/* <Image source={require('../../assets/icons/icons8-heart-100.png')} style={{width:30, height:33}}/> for the heart icon*/}
            <TouchableOpacity onPress={()=>navigation.navigate("CartScreen")}>
                <Image source={require('../../../src/assets/images/pexels-italo-melo-881954-2379004-removebg-preview.png')} style={styles.picture} />
            </TouchableOpacity>
            <View style={{marginBottom:10, flexDirection: 'row', justifyContent:'space-between' }}>
                <Text style={{fontWeight:'bold'}}>{title}</Text>
                <Text style={{fontWeight:'bold', color: '#BB5D5C' }}>{price}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <Image source={require('../../../src/assets/icons/icons8-star-100.png')} style={styles.icons} />
                <Image source={require('../../../src/assets/icons/icons8-briefcase-100.png')} style={styles.icons} />
            </View>
        </View>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    icons:{
        width: 21, 
        height: 22
    },
    picture:{
        width: 150, 
        height: 170 
    }
})