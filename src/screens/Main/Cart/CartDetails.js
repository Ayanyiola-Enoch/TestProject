import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import HeaderMain from '../../../components/Header/HeaderMain';


const CartDetails = () => {
  const cartitem = [
    {
      id: 1,
      title: "Men T-Shirt",
      picture: require('../../../assets/images/22.png'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2",
      color: "Color(White)",

    },
    {
      id: 2,
      title: "Women T-Shirt",
      picture: require('../../../assets/images/33.jpg'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2",
      color: "Color(Gray)",
    },
    {
      id: 3,
      title: "Women T-Shirt",
      picture: require('../../../assets/images/22.png'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2",
      color: "Color(Gray)",
    },
    {
      id: 4,
      title: "Women T-Shirt",
      picture: require('../../../assets/images/33.jpg'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2",
      color: "Color(Gray)",
    },
    {
      id: 5,
      title: "Women T-Shirt",
      picture: require('../../../assets/images/22.png'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2",
      color: "Color(Gray)",
    },
    {
      id: 6,
      title: "Women T-Shirt",
      picture: require('../../../assets/images/33.jpg'),
      size: "Size(Medium)",
      price: "$345",
      quantity: "2",
      color: "Color(Gray)",
    },
  ]

  return (
    <View style={styles.page}>

      <View style={{ flex:1, paddingHorizontal: 20 }}>


        {/* the heading of the main Cart tab*/}

        <View>
          <HeaderMain title={'My Cart'} />
        </View>

        {/* */}
        <View>
          <FlatList
            data={cartitem}
            renderItem={({ item }) => {
              return (
                <View style={{ width: 320, borderColor: 'grey', borderWidth: 2, height: 114, borderBottomRightRadius: 9, marginBottom: 15 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <View>
                      <Image source={item.picture} style={{ width: 100, height: 110 }} />
                    </View>
                    <View style={{ marginLeft: 10, }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>{item.title}</Text>
                        <TouchableOpacity>
                          <Image source={require('../../../assets/icons/icons8-trash-can-100.png')} style={{ width: 18, height: 17 }} />
                        </TouchableOpacity>
                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 30, marginBottom: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>{item.size}</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>{item.color}</Text>
                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 12 }}>{item.price}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 5 }}>
                          <TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>- </Text>
                          </TouchableOpacity>
                          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>{item.quantity}</Text>
                          <TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>+ </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }} />


        </View>

      </View>

      {/* Calculation Bottom*/}

      <View style={{ height: "40%", backgroundColor: '#C2C3C4', padding: 19 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 17 }}>
          <Text>Sub Total</Text>
          <Text style={{ color: "#BB5D5C" }}>$1000</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 17 }}>
          <Text>Sub Total</Text>
          <Text style={{ color: "#BB5D5C" }}>$100</Text>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text>Sub Total</Text>
          <Text style={{ color: "#BB5D5C" }}>$50</Text>
        </View>

        {/*hORIZONTAL LINE */}
        <View style={{ height: 1, backgroundColor: 'black', width: "100%", marginBottom: 40 }}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text>Total</Text>
          <Text style={{ color: "#BB5D5C" }}>$1050</Text>
        </View>

        <TouchableOpacity style={{ marginTop: 20, }}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18, backgroundColor: '#BB5D5C', padding: 10, borderRadius: 30 }}>Checkout</Text>
        </TouchableOpacity>



      </View>


    </View>



  );
};

export default CartDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    // paddingHorizontal: 20,
  },
});