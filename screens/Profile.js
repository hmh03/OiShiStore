import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import Colors from "../utilities/Colors";



export default function Profile({navigation}) {


  return (
    <SafeAreaView style={styles.container}>

      {/* Profile top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
      }}>
        {/* <TouchableOpacity style={{flex: 2}} onPress={() => {navigation.navigate("Home")}}>
        <Ionicons name="chevron-back" size={30} color={Colors.titleColor} />
        </TouchableOpacity> */}

        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={require("../assets/icons/logo.png")} style={{
            width: 80, 
            height: 50, 
            // alignSelf: 'flex-start',
          }}/>
        </View>

        {/* <View style={{flex: 1}}>
            <FontAwesome5 name="bookmark" size={1} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} />
        </View> */}
      </View>

      {/* Line */}
      <View style={{borderWidth: 0.4, borderColor: Colors.textPrimary, marginTop: 25}}></View>

      {/* Profile card */}
      <View style={{marginVertical: 10, flexDirection: 'row', paddingVertical: 20, alignItems: 'center'}}>

        {/* Profile Image */}
        <View style={{flex: 1}}>
          <Image source={require("../assets/login/avatar.png")} style={{width: 70, height: 70, borderRadius: 50}}/>
        </View>

        <View style={{flex: 2}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: Colors.textPrimary}}>Welcome</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5, color: Colors.titleColor}}>Oishi</Text>
        </View>
        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
            <Ionicons name="mail-unread-outline" size={30} color="black" />
        </TouchableOpacity>
        

      </View>

      {/* Line */}
      <View style={{borderWidth: 0.4, borderColor: Colors.textPrimary}}></View>

      {/* Profile options */}
      <View style={{marginTop: 30}}>

        <TouchableOpacity style={{flexDirection: 'row', padding: 17, marginBottom: 10}}>
          <Feather name="settings" size={24} color="black" style={{marginRight: 25}}/>
          <Text style={{fontSize: 16, color: Colors.titleColor}}>Settings</Text>
          <View style={{flex: 1, alignItems: "flex-end"}}>
           <Ionicons name="chevron-forward" size={24} color="black" style={{marginRight: 5}}/>
          </View>
        </TouchableOpacity>      

        <TouchableOpacity style={{flexDirection: 'row', padding: 17, marginBottom: 10}}>
          <Ionicons name="card-outline" size={24} color="black" style={{marginRight: 25}}/>
          <Text style={{fontSize: 16, color: Colors.titleColor}}>My Cards</Text>
          <View style={{flex: 1, alignItems: "flex-end"}}>
           <Ionicons name="chevron-forward" size={24} color="black" style={{marginRight: 5}}/>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={{flexDirection: 'row', padding: 17, marginBottom: 10}}>
          <Feather name="package" size={24} color="black" style={{marginRight: 25}}/>
          <Text style={{fontSize: 16, color: Colors.titleColor}}>Orders</Text>
          <View style={{flex: 1, alignItems: "flex-end"}}>
           <Ionicons name="chevron-forward" size={24} color="black" style={{marginRight: 5}}/>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={{flexDirection: 'row', padding: 17, marginBottom: 10}} onPress={() => {navigation.navigate("Login")}}>
          <Entypo name="log-out" size={24} color="black" style={{marginRight: 25}} />
          <Text style={{fontSize: 16, color: Colors.titleColor}}>Log Out</Text>
          <View style={{flex: 1, alignItems: "flex-end"}}>
           {/* <Ionicons name="chevron-forward" size={24} color="black" style={{marginRight: 5}}/> */}
          </View>
        </TouchableOpacity> 
      </View>

      {/* Support Card */}
      <View style={{padding: 20, flexDirection: 'row', backgroundColor: '#ffdac7', alignItems: 'center', borderRadius: 20, marginTop: 30}}>
        <FontAwesome5 name="headset" size={50} color={Colors.primary} />
        <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 20, color: Colors.primary}}>How can we help you ?</Text>
      </View>

      {/* Privacy-policy */}
      {/* <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 13, color: Colors.textPrimary}}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color="black" style={{marginRight: 20, marginLeft: 5}}/>
        <Text style={{fontSize: 13, color: Colors.textPrimary}}>Imprint</Text>
        <Ionicons name="chevron-forward" size={24} color="black" style={{marginRight: 20, marginLeft: 5}}/>
        <Text style={{fontSize: 13, color: Colors.textPrimary}}>English</Text>
        <Ionicons name="chevron-down" size={24} color="black" style={{}}/>
      </View> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    marginTop: 10,
    backgroundColor: Colors.background,
  },
});

