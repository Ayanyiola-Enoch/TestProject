import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FormButton from '../components/Button/FormButton';
import FormInput from '../components/Input/FormInput';
import Header from '../components/Header/Header';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header header={"Register"} />
      <FormInput title={"Full Name"} placeholder={"Enter your name"} />
      <FormInput title={"Email"} placeholder={"Enter your email"} />
      <FormInput title={"Password"} placeholder={"Enter your password"} kkk={true} />

    {/* <View style={{flex:1}}>

      <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ height: 1, width: "40%", backgroundColor: 'black' }}>
        </View>
        <Text style={{ fontSize: 14, color: 'black' }}>OR</Text>

        <View style={{ height: 1, width: "40%", backgroundColor: 'black' }}></View>
      </View>

      <View style={{ marginTop: 27, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: '#D8D8D8', width: 60, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/images/google.png')} style={{ width: 30, height: 30 }} />
        </View>
        <View style={{ backgroundColor: '#D8D8D8', width: 60, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/images/facebook.png')} style={{ width: 30, height: 30 }} />
        </View>
      </View>
    </View> */}
      <FormButton title={"Sign in"} />

      {/* <Text style={{color:'black', fontSize:12, textAlign:'center', marginTop:17, marginBottom:10}}>Doesn't Have an account? <Text style={{color:'#BB5D5C', fontWeight:'bold'}}>sign up</Text></Text> */}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});