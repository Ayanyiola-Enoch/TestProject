import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeaderMain from '../../../components/Header/HeaderMain'

const ProfileScreen = () => {
  return (
    <View style={styles.page}>
      <HeaderMain title={'Profile'} />
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <View style={{backgroundColor: '#BB5D5C', borderRadius:100, padding:3}}>
          <Image source={require('../../../assets/images/22.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
})