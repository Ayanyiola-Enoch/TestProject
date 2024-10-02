import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const shirts = [
  {
    id: 1, picture: require('../../../assets/images/33.jpg'),
    title: 'Men T-Shirt',
    cost1: '$233',
    StarIcon: require('../../../assets/icons/icons8-star-100.png'),
    Save: require('../../../assets/icons/icons8-briefcase-100.png'),
  },
  {
    id: 2, picture: require('../../../assets/images/22.png'),
    title: 'Men T-Shirt',
    cost1: '$233',
    StarIcon: require('../../../assets/icons/icons8-star-100.png'),
    Save: require('../../../assets/icons/icons8-briefcase-100.png'),
  },
  {
    id: 3, picture: require('../../../assets/images/33.jpg'),
    title: 'Women T-Shirt',
    cost1: '$233',
    StarIcon: require('../../../assets/icons/icons8-star-100.png'),
    Save: require('../../../assets/icons/icons8-briefcase-100.png'),
  },
  {
    id: 4, picture: require('../../../assets/images/33.jpg'),
    title: 'Men T-Shirt',
    cost1: '$233',
    StarIcon: require('../../../assets/icons/icons8-star-100.png'),
    Save: require('../../../assets/icons/icons8-briefcase-100.png'),
  },

];

const HomeScreen = ({ navigation }) => {

  const RenderHeader = () => {
    return (
      <View>

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

        <View style={{ marginTop: 10 }}>

          <FlatList data={['All', "Men's", 'Women', 'Children']}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginLeft: 15, marginBottom: 15 }}>
                  <View style={{ backgroundColor: '#D8D8D8', width: 68, borderRadius: 30, height: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, color: 'black' }}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )
            }} />
        </View>

        <View style={{ marginBottom: 19 }}>

          <FlatList data={shirts}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => {
              return (
                <View style={{ marginTop: 10, }}>
                  <Image source={item.picture} style={{ height: 172, width: 149, }} />
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8 }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>{item.title}</Text>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: '#BB5D5C' }}>{item.cost1}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8 }}>
                    <TouchableOpacity>
                      <Image source={item.StarIcon} style={{ height: 20, width: 21 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#BB5D5C', width: 30, height: 27, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                      <Image source={item.Save} style={{ height: 20, width: 21 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }} />
        </View>
      </View>

    )
  }











  return (
    <View style={styles.page}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{}}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#BB5D5C' }}>Welcome Back!</Text>
          <Text style={{ fontWeight: '600', fontSize: 12, color: 'black', textAlign: 'center' }}>Ayanyiola Enoch</Text>

        </View>
        <TouchableOpacity>
          <Image source={require('../../../assets/icons/icons8-notification-100.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 19 }}>
        <Image source={require('../../../assets/icons/icons8-search-100.png')} style={{ width: 20, height: 20, position: 'absolute', top: 9, left: 10 }} />
        <TextInput placeholder='Search' style={{ width: 320, height: 40, borderWidth: 2, borderRadius: 10, paddingHorizontal: 30, }} />
        <Image source={require('../../../assets/icons/icons8-microphone-100.png')} style={{ width: 20, height: 20, position: 'absolute', top: 9, right: 10 }} />
      </View>

      <FlatList
        data={['']}
        ListHeaderComponent={RenderHeader} />

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