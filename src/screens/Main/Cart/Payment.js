import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import HeaderMain from '../../../components/Header/HeaderMain';

const Payment = ({ navigation }) => {
  const Address = [{
    id: 1,
    name: "Home Address",
    phone: "+2247016389263",
    address: "Opposite the colony, 123 Main St, Abuja, Nigeria",
    select: require('../../../assets/icons/icons8-circle-100.png'),
    edit: require('../../../assets/icons/icons8-edit-100.png'),
    tick: require('../../../assets/icons/icons8-filled-circle-100.png')
  },
  {
    id: 2,
    name: "Office Address",
    phone: "+2247013678063",
    address: "Opposite the colony, 123 Main St, Abuja, Nigeria",
    select: require('../../../assets/icons/icons8-circle-100.png'),
    edit: require('../../../assets/icons/icons8-edit-100.png'),
  },
  ];





  return (
    <View style={styles.page}>
      <HeaderMain title={'Address'} />

      <View>
        <Text style={{ fontSize: 14.4, fontWeight: "600", color: 'black' }}>Shopping Information</Text>
      </View>

{/* Address selection FlatList */}

      <FlatList data={Address}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: 320, height: 70, borderWidth: 2, borderRadius: 7, marginBottom: 19, marginTop: 17, borderColor: 'black' }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 9 }}>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={item.select} style={{ width: 35, height: 30 }} />
                  {/* <Image source={item.tick} style={{ width: 16, height: 14, position: 'absolute' }} /> */}
                </TouchableOpacity>


                <View style={{ flex: 1, marginLeft: 17, }}>
                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '600' }}>{item.name}</Text>
                  <Text style={{ color: 'black', fontSize: 12 }}>{item.phone}</Text>
                  <Text style={{ color: 'black', fontSize: 12 }}>Oppositre the colony</Text>
                </View>

                <TouchableOpacity>
                  <Image source={require('../../../assets/icons/icons8-edit-100.png')} style={{ width: 22, height: 22 }} />
                </TouchableOpacity>
              </View>


            </View>
          )
        }} />

        {/* Payment  */}

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 15.5, color: "black", fontWeight: 'bold' }}>Payment Method</Text>
      </View>

      <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ width: 71, height: 37, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/icons/icons8-paypal-100.png')} style={{ width: 26, height: 28 }} />
        </View>
        <View style={{ width: 71, height: 37, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/icons/icons8-payment-method-100.png')} style={{ width: 26, height: 28 }} />
        </View>
        <View style={{ width: 71, height: 37, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/icons/icons8-visa-100.png')} style={{ width: 26, height: 28 }} />
        </View>
      </View>

      {/* Calculation of the order */}

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 15.5, color: "black", fontWeight: 'bold' }}>Amount</Text>
      </View>

      <View style={{ backgroundColor: '#D8D8D8', width: 320, height: 140, borderRadius: 10, marginTop: 18 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14, marginTop: 18, marginBottom: 8 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Order Amount</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>$1000.00</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14, marginBottom: 5 }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Delivery Charges</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>$100.00</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14, marginBottom: 5 }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Order Amount</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>$50.00</Text>
        </View>
        <View style={{ marginTop: 7, height: 0.6, backgroundColor: 'black' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14, marginBottom: 8, marginTop: 6 }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#BB5D5C' }}>Total Payment</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#BB5D5C' }}>$1050.00</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ marginTop: 20, }}>
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 13, backgroundColor: '#BB5D5C', padding: 10, borderRadius: 30 }}>Payment</Text>
      </TouchableOpacity>

    </View >
  );
};

export default Payment;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    paddingHorizontal: 20
  }
})