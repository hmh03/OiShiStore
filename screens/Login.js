import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from "../utilities/Colors";

export default function Login({navigation}) {
 
  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <View style={{alignItems: 'center'}}>
        <Image source={require("../assets/icons/logo1.png")} style={{
          width: 80, 
          height: 70, 
          marginTop: 10,

        }}/>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: Colors.titleColor}}>OishiStore</Text>
      </View>

      {/* Login__Images */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 20,}}>
        <Image source={require("../assets/login/backgroud3.jpg")} style={styles.login_images}/>
        <Image source={require("../assets/login/backgroud4.jpg")} style={styles.login_images}/>
        <Image source={require("../assets/login/backgroud5.jpg")} style={styles.login_images}/>
      </ScrollView>

      
      {/* Social-media logins */}
      <View style={{marginBottom: 15,justifyContent: 'space-between'}}>

        {/* line */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'red'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontWeight: 'bold', color: Colors.titleColor, fontSize: 19, marginHorizontal: 10}}>Login</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'red'}} />
        </View>

        {/* login with google */}
        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/google.png")} style={{width: 25, height: 25, marginRight: 20}}/>
          <Text style={{fontSize: 15}}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/facebook.png")} style={{width: 25, height: 25, marginRight: 20}}/>
          <Text style={{fontSize: 15}}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_buttons} onPress={() => {navigation.navigate("Main");}}>
          <Image source={require("../assets/icons/apple-1.png")} style={{width: 25, height: 25, marginRight: 20}}/>
          <Text style={{fontSize: 15}}>Continue with Apple</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{
              textDecorationLine: 'underline',
              marginLeft: 10, 
              color: Colors.primary, 
              fontWeight: 'bold',
              fontSize: 20,
            }} onPress={() => {navigation.navigate("Sign Up");}}>Sign Up</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.brown,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  login_images: {
    width: 280,
    height: 380,
    borderRadius: 15,
    marginRight: 10,
  }
});
