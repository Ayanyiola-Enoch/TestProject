import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderMain from '../../../components/Header/HeaderMain'

const ProfileScreen = () => {
  const profileDetail = [
    {
      id: 1,
      icon: require('../../../assets/icons/icons8-alarm-clock-100.png'),
      title: 'Order History',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
    {
      id: 2,
      icon: require('../../../assets/icons/icons8-user-male-100.png'),
      title: 'Personal Details',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
    {
      id:3,
      icon: require('../../../assets/icons/icons8-location-100.png'),
      title: 'Address',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
    {
      id:4,
      icon: require('../../../assets/icons/icons8-magnetic-card-100.png'),
      title: 'Payment Method',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
    {
      id:5,
      icon: require('../../../assets/icons/icons8-info-100.png'),
      title: 'About',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
    {
      id:6,
      icon: require('../../../assets/icons/icons8-help-100.png'),
      title: 'Help',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
    {
      id:7,
      icon: require('../../../assets/icons/icons8-log-out-100.png'),
      title: 'Logout',
      arrow: require('../../../assets/icons/icons8-forward-100.png'),
    },
  ];
  return (
    <View style={styles.page}>
      <HeaderMain title={'Profile'} />
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <View style={{ backgroundColor: '#BB5D5C', borderRadius: 100, padding: 3 }}>
          <Image source={require('../../../assets/images/me].jpg')} style={{ width: 100, height: 100, borderRadius: 100 }} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 7 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Ayanyiola Enoch</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>ayanyiolaenoch@gmail.com</Text>
        </View>
      </View>

      <View>
        <FlatList data={profileDetail} renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
              <View style={{ flexDirection:'row', alignItems: 'center',}}>
                <View style={{ backgroundColor: '#D8D8D8', width: 42, height: 44, borderRadius: 10, padding: 9, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={item.icon} style={{ width: 21, height: 22 }} />
                </View>
                  <Text style={{marginLeft:25, fontSize:13, color:'black'}}>{item.title}</Text>
              </View>
              <TouchableOpacity>
                <Image source={item.arrow} style={{ width: 20, height: 20, }} />
              </TouchableOpacity>
            </View>
          );
        }} />
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