import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from "../utilities/Colors";
import cartItems from './CartItems';


export default function Cart({navigation}) {
    // state to handle which category's oishi are diplayed
  let totalPrice = 0;
  console.log(cartItems);

  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {navigation.navigate("Home")}}>
        <Ionicons name="chevron-back" size={30} color={Colors.titleColor} />
        </TouchableOpacity>

        <View style={{flex: 1}}>
        <Text style={{color: Colors.titleColor, fontWeight:'bold', alignSelf: 'center', fontSize: 20}}>Cart</Text>
        </View>

        <View style={{flex: 1}}>
            {/* <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} /> */}
        </View>
      </View>


      <ScrollView showsVerticalScrollIndicator={false }>
        
        {/* cart items*/}
        <View style={{marginTop: 20}}>

          {
            cartItems.map((item, index) => {
              // update totalPrice
              const [cout, setCout] = useState(1);
              totalPrice += parseInt(item.price*cout);
              
              return(
                
                <View key={index} style={{flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 15, marginVertical:7}}>
                  <View style={{backgroundColor: Colors.background, padding: 15, borderRadius: 15, marginRight: 10}}>
                    <Image source={item.images[0]} style={{width: 80, height: 80,objectFit: 'contain' }}/>
                  </View>

                  <View style={{flex: 1}}>
                    <Text style={{fontWeight: '700', fontSize: 16, color: Colors.titleColor, marginBottom: 2}}>{item.name}</Text>
                    <Text style={{color: Colors.textPrimary, marginBottom: 5}}>{item.type}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                      <View style={{flexDirection: 'row', flex: 3, alignItems: 'baseline'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.titleColor, marginBottom: 2}}>${item.price}</Text>
                        <Text>.00</Text>
                      </View>
                    {/* cout */}
                      <View style={{alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: Colors.background, marginLeft: 15}}>
                        
                        <TouchableOpacity onPress={() => {
                          if(cout>0){
                            setCout(cout-1)
                          }
                          }} style={{backgroundColor: '#fff', paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6}}>
                          <Text style={{fontSize: 17, color: Colors.titleColor}}>-</Text>
                        </TouchableOpacity>

                        <Text style={{fontWeight: 'bold', marginHorizontal: 2}}>{cout}</Text>
                        <TouchableOpacity onPress={() => {setCout(cout+1)}} style={{backgroundColor: Colors.primary, paddingVertical: 0, paddingHorizontal: 9, marginHorizontal: 5, borderRadius: 6}}>
                          <Text style={{fontSize: 17, color: "#fff"}}>+</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>

                </View>
              );
            })
          }

        </View>


        {/* Total amount */}
        <View style={{marginTop: 50}}>

          <View style={{flexDirection: 'row', }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor, flex: 1}}>Total</Text>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.titleColor, flex: 1,}}>
                {totalPrice}<Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.titleColor, flex: 1,}}>.00</Text>
              </Text>
            </View>
          </View>

          {/* Checkout button */}
          <TouchableOpacity style={{
              backgroundColor: Colors.primary, 
              alignItems: 'center',
              paddingVertical: 20,
              marginHorizontal: 0,
              marginVertical: 20,
              borderRadius: 15,
              }} onPress={() => navigation.navigate("Checkout",{totalPrice})}>
              <Text style={{color: "#fff", fontSize: 20}}>Checkout</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>


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

