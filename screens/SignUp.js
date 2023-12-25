import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from "../utilities/Colors";

export default function SignUp({navigation}) {
  // const login_images = [require("../assets/login/sneaker_2.jpg")];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={require("../assets/icons/logo1.png")} style={{
           width: 80, 
           height: 70, 
           marginTop: 10,
        }}/>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: Colors.titleColor}}>OishiStore</Text>
      </View>

      {/* sign-up fields */}
      <View style={{marginVertical: 40, justifyContent: 'space-between'}}>
        <Text style={{
            fontSize: 18,
            fontWeight: 'bold', 
            color: Colors.titleColor,
            marginBottom: 8,
            // alignSelf: 'center',
        }}>Create an account.</Text>
        <TextInput placeholder="Name" style={styles.login_fields}/>
        <TextInput placeholder="Email" keyboardType="email-address" style={styles.login_fields}/>
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.login_fields} />
        <TouchableOpacity style={{
            backgroundColor: Colors.primary, 
            paddingVertical: 15, 
            paddingHorizontal: 25,
            alignItems: 'center',
            width: 200,
            alignSelf: 'center',
          }} onPress={() => {navigation.navigate("Main");}}>
          <Text style={{color: '#fff', fontSize: 20}}>Continue</Text>
        </TouchableOpacity>
      </View>

      
      {/* Social-media logins */}
      <View style={{marginBottom: 25,justifyContent: 'space-between'}}>

        {/* line */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'blue'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold', color: Colors.titleColor, fontSize: 19}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'blue'}} />
        </View>

        {/* login with google */}
        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/google.png")} style={{width: 25, height: 25, marginRight: 25}}/>
          <Text style={{fontSize: 15}}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/facebook.png")} style={{width: 25, height: 25, marginRight: 25}}/>
          <Text style={{fontSize: 15}}>Sign Up with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/apple-1.png")} style={{width: 25, height: 25, marginRight: 25}}/>
          <Text style={{fontSize: 15}}>Sign Up with Apple</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={{
              textDecorationLine: 'underline',
              marginLeft: 10, 
              color: Colors.primary, 
              fontWeight: 'bold',
              fontSize: 20,
            }} onPress={() => {navigation.navigate("Login");}}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 35,
  },

  social_buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.brown,
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: 'center'
  },

  login_fields: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.brown,
    backgroundColor: "#fff",
    marginBottom: 10,
    fontSize: 18,
  },
 
});
