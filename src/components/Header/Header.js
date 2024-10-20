import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({ header }) => {
  return (
    <View style={{ marginTop: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
      <View style={{ width: 49, height: 46, backgroundColor: '#D8D8D8', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/icons/icons8-back-24.png')} style={{ width: 25, height: 25 }} />
      </View>
      <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: 'bold', color: 'black' }}>{header}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

});