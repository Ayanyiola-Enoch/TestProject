import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import HeaderMain from '../../../components/Header/HeaderMain';

{/* This is the heading of the main Cart tab*/ }

const CartDetails = () => {
  const CartDetails = [
    {
      id: 1,
      title: "Men T-Shirt",
      picture: require('../../../assets/images/22.png'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2"

    },
    {
      id: 2,
      title: "Women T-Shirt",
      picture: require('../../../assets/images/33.jpg'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2"
    }
  ]
  return (
    <View style={styles.page}>
      <View>
        <HeaderMain title={'My Cart'} />
      </View>

      <View>
        <FlatList
          data={CartDetails}
          renderItem={({ item }) => {
            <View style={{width: 330, height: 119, borderRadius: 10 }}>
              <Image source={require('../../../assets/images/22.png')} style={{ width: 100, height: 110 }} />
              <View style={{ marginLeft: 10 }}>
                <Text>Men T-shirt</Text>
                <Text>Size (Medium)</Text>
                <Text>$345</Text>
              </View>
  
              <View>
                <Image source={require('../../../assets/icons/icons8-trash-can-100.png')} style={{ width: 18, height: 17 }} />
                <Text style={{ fontSize: 12, color: '#BB5D5C' }}>Color (White)</Text>
                <Text style={{ fontSize: 12, color: '#BB5D5C' }}>. 2 + </Text>
              </View>
            </View>
           }} />

</View>
       

    </View>



  );
};

export default CartDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});