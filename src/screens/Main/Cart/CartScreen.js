import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
    

        <View>
          <Image source={require('../../../assets//images/33.jpg')} style={{ width: '100%', opacity: 0.4, height: 370, borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Image source={require('../../../assets//icons/icons8-back-24.png')} style={{ width: 35, height: 25, position: 'absolute', bottom: 340, left: 18 }} />
          <Image source={require('../../../assets//icons/icons8-heart-100.png')} style={{ width: 35, height: 32, position: 'absolute', bottom: 340, right: 20 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 13 }}>

          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Women T-Shirt</Text>
          </View>

          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../../assets/icons/icons8-star-100.png')} style={{ width: 20, height: 16 }} />
              <Image source={require('../../../assets/icons/icons8-star-100.png')} style={{ width: 20, height: 16 }} />
              <Image source={require('../../../assets/icons/icons8-star-100.png')} style={{ width: 20, height: 16 }} />
              <Image source={require('../../../assets/icons/icons8-star-100.png')} style={{ width: 20, height: 16 }} />
            </View>
            <Text style={{ color: 'grey', fontSize:13 }}>2038 Reviews</Text>
          </View>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', color: 'black', paddingHorizontal: 26, marginTop: 13 }}>Select your Size</Text>
        </View>


        <View style={{ marginTop: 10, paddingLeft: 26, flexDirection: 'row', }}>

          <View style={{ backgroundColor: "#c2c3c4", width: 37, height: 37, alignItems: 'center', marginRight: 10, justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>S</Text>
          </View>
          <View style={{ backgroundColor: "#c2c3c4", width: 37, height: 37, alignItems: 'center', marginRight: 10, justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>M</Text>
          </View>
          <View style={{ backgroundColor: "#c2c3c4", width: 37, height: 37, alignItems: 'center', marginRight: 10, justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>L</Text>
          </View>
          <View style={{ backgroundColor: "#c2c3c4", width: 37, height: 37, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>XL</Text>
          </View>



          <View style={{ backgroundColor: "#c2c3c4", width: 90, height: 37, alignItems: 'center', marginLeft: 40, justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>-2 + 5</Text>
          </View>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', color: 'black', paddingHorizontal: 26, marginTop: 18 }}>Description</Text>
          <Text style={{ color: "black", width: 370, paddingHorizontal: 20, textAlign: 'justify' }}>T-shirt is a style of fabric shirt named after the T shap of its body and sleeves. Traditional, it has short sleeves and a round neckless, known as  acrew neck, which lack a collar.</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View>
            <Text style={{ fontWeight: 'bold', color: '#BB5D5C' }}>S341</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={{ marginTop: 20, }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 13, backgroundColor: '#BB5D5C', padding: 10, borderRadius: 30 }}>Payment</Text>
          </TouchableOpacity>

        </View>

    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});