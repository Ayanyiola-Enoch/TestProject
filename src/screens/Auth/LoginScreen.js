import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import FormButton from '../../components/Button/FormButton';
import FormInput from '../../components/Input/FormInput';
import Header from '../../components/Header/Header';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={{ flex: 1 }}>

        <Header header={"Sign In"} />
        <FormInput title={"Email"} placeholder={"Enter your email"} />
        <FormInput title={"Password"} placeholder={"Enter your password"} kkk={true} />

      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Verify")}>
        <FormButton
          title={"Sign in"}
          onPress={() => navigation.navigate("Main", { screen: "Bottom" })}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginBottom: 90 }} onPress={() => navigation.navigate("Register")}>
        <Text style={{ marginTop: 20, color: "black", textAlign: 'center' }}>If you don't have an account, <Text style={{ fontWeight: "bold", color: "#BB5D5C" }}>sign up</Text></Text>
      </TouchableOpacity>
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