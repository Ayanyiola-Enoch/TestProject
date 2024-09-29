import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import HeaderMain from '../../../components/Header/HeaderMain';

const FavouriteScreen = () => {
  const CartFavourite = [
    {
      id: 1,
      title: "Men T-Shirt",
      picture: require('../../../assets/images/22.png'),
      cost: '$342',
      image: require('../../../assets/icons/icons8-star-100.png'),
      image2: require('../../../assets/icons/icons8-briefcase-100.png'),
    },

    {
      id: 2,
      title: "Woman T-Shirt",
      picture: require('../../../assets/images/22.png'),
      cost: '$342',
      image: require('../../../assets/icons/icons8-star-100.png'),
      image2: require('../../../assets/icons/icons8-briefcase-100.png'),
    },
    {
      id: 3,
      title: "Men T-Shirt",
      picture: require('../../../assets/images/22.png'),
      cost: '$342',
      image: require('../../../assets/icons/icons8-star-100.png'),
      image2: require('../../../assets/icons/icons8-briefcase-100.png'),
    },
    {
      id: 4,
      title: "Woman T-Shirt",
      picture: require('../../../assets/images/22.png'),
      cost: '$342',
      image: require('../../../assets/icons/icons8-star-100.png'),
      image2: require('../../../assets/icons/icons8-briefcase-100.png'),
    },

  ];
  return (
    <View style={styles.page}>

      <View>
        <HeaderMain title={'My Favourite'} />
      </View>

      <View>
        <FlatList data={CartFavourite}
          numColumns={2} columnWrapperStyle={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 }}
          renderItem={({ item }) => {
            return (
              <View style={{ width: 158, height: 240, borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>
                <View>
                  <Image source={require('../../../assets/images/33.jpg')} style={{ width: 155, borderRadius: 10, height: 155, }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.cost}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}>
                  <Image source={item.image} style={{ width: 20, height: 20 }} />
                  <View style={{backgroundColor:'#BB5D5C', height:26, width:26,padding:11, justifyContent:'center', borderRadius:21, alignItems:'center' }}>
                    <Image source={item.image2} style={{ width: 20, height: 20 }} />
                  </View>
                </View>
              </View>
            )
          }}
        />

      </View>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
});