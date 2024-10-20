import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';
import Header from '../../components/Header/Header';
import FormInput from '../../components/Input/FormInput';
import FormButton from '../../components/Button/FormButton';

const VerifyScreen = () => {
  return (
    <View style={styles.page}>
      <Header header={"OTP Code Verification"} />

      <FormInput title={"Code has been sent to +23480*******99"} />

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <Text style={{ marginBottom: 30 }}>Resend Code in <Text style={{ color: '#BB5D5C' }}>55</Text> s</Text>
      </View>

      <FormButton title={"Verify"} />

    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});