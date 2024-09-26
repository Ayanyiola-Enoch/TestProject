import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MiniButton from '../../../components/Button/MiniButton';
import CartItem from '../../../components/Item/CartItem';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontSize: 17, color: "#BB5D5C", fontWeight: "bold" }}>Welcome back!</Text>
          <Text style={{ textAlign: 'center' }}>Ayanyiola Enoch</Text>
        </View>
        <View>
          <Image source={require("../../../assets/icons/icons8-notification-100.png")} style={styles.notificationIcon} />
        </View>
      </View>

      <View style={{ position: 'relative', width: '100%' }}>
        <Image source={require("../../../assets/icons/icons8-search-100.png")} style={styles.searchIcon} />
        <TextInput placeholder='Search' style={styles.input} />
        <Image source={require('../../../assets/icons/icons8-microphone-100.png')} style={styles.recordIcon} />
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={{ color: "white", width: 100, lineHeight: 28, marginBottom: 10, fontWeight: 'bold' }}>Shop with us! Get 50% off on items</Text>
            <TouchableOpacity style={{ width: 90, height: 39, backgroundColor: '#C2C3C4', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 10 }}><Text style={{ color: 'black', fontSize: 12 }}> Shop Now</Text></TouchableOpacity>
          </View>

          <View>
            <Image source={require('../../../assets/images/pexels-shiru-gamage-226946-1308578-removebg-preview.png')} style={{ width: 180, height: 150 }} />
          </View>

        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <MiniButton title={'All'} />
        <MiniButton title={'Men'} />
        <MiniButton title={'Women'} />
        <MiniButton title={'children'} />
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <CartItem title={'Men T-shirt'} price={'S233'} navigation={navigation} />
        <CartItem title={'Men T-shirt'} price={'S233'} />
      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  notificationIcon: {
    width: 20,
    height: 20
  },
  input: {
    marginTop: 20,
    paddingRight: 40,
    width: 320,
    height: 40,
    backgroundColor: '#D8D8D8',
    borderRadius: 13,
    paddingLeft: 40,

  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 30,
    width: 20,
    height: 20,
  },
  recordIcon: {
    position: 'absolute',
    right: 10,
    top: 30,
    width: 20,
    height: 20,
  },
  card: {
    backgroundColor: '#BB5D5C',
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 29,
    paddingTop: 10,
    marginBottom: 19,
  }
});