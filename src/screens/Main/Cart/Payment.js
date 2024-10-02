import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderMain from '../../../components/Header/HeaderMain';

const Payment = () => {
  return (
    <View style={styles.page}>
      <HeaderMain title={'Address'} />

      <View>
        <Text style={{ fontSize: 14.4, fontWeight: "600", color: 'black' }}>Shopping Information</Text>
      </View>

      <View style={{ width: 320, height: 79, borderWidth: 2, borderRadius: 7, marginBottom: 19, marginTop: 28, borderColor: 'black' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 9 }}>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/icons/icons8-circle-100.png')} style={{ width: 44, height: 39 }} />
            <Image source={require('../../../assets/icons/icons8-filled-circle-100.png')} style={{ width: 20, height: 19, position: 'absolute' }} />
          </TouchableOpacity>


          <View style={{ flex: 1, marginLeft: 17, }}>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Home Address</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>+2247016389263</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>Oppositre the colony</Text>
          </View>

          <TouchableOpacity>
            <Image source={require('../../../assets/icons/icons8-edit-100.png')} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>


      </View>

      <View style={{ width: 320, height: 79, borderRadius: 7, borderWidth: 2, marginTop: 10, borderColor: 'black' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 9 }}>

          <TouchableOpacity style={{}}>
            <Image source={require('../../../assets/icons/icons8-circle-100.png')} style={{ width: 44, height: 39 }} />
          </TouchableOpacity>


          <View style={{ flex: 1, marginLeft: 17, }}>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Home Address</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>+2247016389263</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>Oppositre the colony</Text>
          </View>

          <TouchableOpacity>
            <Image source={require('../../../assets/icons/icons8-edit-100.png')} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>


      </View>


      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 15.5, color: "black", fontWeight: 'bold' }}>Payment Method</Text>
      </View>

      <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ width: 71, height: 37, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/icons/icons8-paypal-100.png')} style={{ width: 30, height: 30 }} />
        </View>
        <View style={{ width: 71, height: 37, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/icons/icons8-payment-method-100.png')} style={{ width: 30, height: 30 }} />
        </View>
        <View style={{ width: 71, height: 37, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../assets/icons/icons8-visa-100.png')} style={{ width: 30, height: 30 }} />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 15.5, color: "black", fontWeight: 'bold' }}>Amount</Text>
      </View>
      
      <View style={{backgroundColor:'#D8D8D8', width:320, height:200}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}> 
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Order Amount</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>$123.00</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Order Amount</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>$123.00</Text>
        </View>
      </View>

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