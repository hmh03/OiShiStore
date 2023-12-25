import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Colors from "../utilities/Colors";
import cartItems from './CartItems';


export default function Checkout({route,navigation}) {
  const { totalPrice } = route.params;


  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {navigation.navigate("Cart")}}>
        <Ionicons name="chevron-back" size={30} color={Colors.titleColor} />
        </TouchableOpacity>

        <View style={{flex: 1}}>
        <Text style={{color: Colors.titleColor, fontWeight:'bold', alignSelf: 'center', fontSize: 20}}>Checkout</Text>
        </View>

        <View style={{flex: 1}}>
            {/* <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} /> */}
        </View>
      </View>

      <View style={{marginTop: 20, flex: 3}}>

        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor, marginTop: 15, marginBottom: 17}}>Payment Method</Text>

        {/* Credit Cards */}
        <TouchableOpacity>
          <View style={{flexDirection: 'row', backgroundColor: Colors.titleColor, padding: 15,marginVertical:7, alignItems: 'center'}}>
            <View style={{flex: 1}}>
             <Image source={require("../assets/product-images/test/visa.png")} style={{width: 80, height: 30}}/>  
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: '#fff'}}>****3456</Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', backgroundColor: Colors.titleColor, padding: 15,marginVertical:7, alignItems: 'center'}}>
            <View style={{flex: 1}}>
             <Image source={require("../assets/product-images/test/mastercard.png")} style={{width: 80, height: 30}}/>  
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: '#fff'}}>****3183</Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </View>

          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', backgroundColor:"#fff", padding: 20, marginVertical:7, justifyContent: 'center', borderWidth: 1, borderColor: Colors.textPrimary}}>
            <Text>Add New Card</Text>
          </View>
        </TouchableOpacity>
      </View>

      
      {/* Total amount to pay */}
      <View style={{flexDirection: 'row', marginTop: 28 ,justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor, flex: 1}}>Total</Text>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor, flex: 1,}}>
            {totalPrice}<Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.titleColor, flex: 1,}}>.00</Text>
          </Text>
        </View>
      </View>

      {/* Confirm checkout button */}
      <View style={{flex:1}}>


        <TouchableOpacity style={{
          backgroundColor: Colors.primary, 
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
          marginHorizontal: 0,
          marginVertical: 20,
          borderRadius: 15,
          flexDirection: 'row'
          }} onPress={() => Alert.alert("", "Payment Processed.\n Thank you.",
          [
            {
              text: "Ok",
              onPress: () =>{
                navigation.navigate("Home")
                cartItems.length = 0;
              } 
            },
          ])}>
            <Entypo name="lock" size={24} color="white" />
          <Text style={{color: "#fff", marginLeft: 10, fontWeight: 'bold'}}>Make Payment</Text>
        </TouchableOpacity>
        
      </View>

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

