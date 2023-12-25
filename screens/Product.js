import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Colors from "../utilities/Colors";
import Products from '../utilities/database';
import cartItems from './CartItems';



export default function Product({route, navigation}) {
  const [modalVisibility, changeModalVisibility] = useState(false); 
  const [currentShot, selectShot] = useState(0);   

  // data from home screen
  const {index} = route.params;
  const product_item = Products[index]
  const product_name = product_item.name;
  const product_category= product_item.type;
  // const product_price= product_item.price;
  const pd_shots = product_item.images

  return (
    <SafeAreaView style={{marginTop: 15, flex: 1, backgroundColor: Colors.background}}>
      
      {/* A modal */}
      <Modal animationType={"fade"} transparent={false} visible={modalVisibility}>
        {/* Modal content */}
        <View style={styles.modal}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Item added to Cart successfully.</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity style={{flexDirection: 'row', padding: 20,borderRadius:9, backgroundColor: Colors.primary, marginRight: 10}} onPress={() => {navigation.navigate("Cart")}}>
              <Text style={{color: '#fff', fontSize: 17}}>Go to Cart</Text>
              <Ionicons name="cart" size={24} color="#fff" style={{marginLeft: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', padding: 20,borderRadius:9, backgroundColor: Colors.primary}} onPress={() => {navigation.navigate("Home")}}>
              <Text style={{color: '#fff', fontSize: 17}}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.container}>

          {/* Product top-nav */}
          <View style={{
              flexDirection: 'row',
              marginTop: 10,
          }}>
              <TouchableOpacity style={{flex: 1}} onPress={() => {navigation.navigate("Home")}}>
              <Ionicons name="chevron-back" size={30} color={Colors.titleColor} />
              </TouchableOpacity>

              <View style={{flex: 3,alignItems: 'center'}}>
                <Text style={{color: Colors.titleColor, fontWeight:'bold', fontSize: 20}}>Product Details</Text>
              </View>

              <View style={{flex: 1}}>
                  {/* <FontAwesome5 name="bookmark" size={22} color={Colors.titleColor} style={{alignSelf: 'flex-end'}} /> */}
              </View>
          </View>

          

          <View style={{marginTop: 30,}}>
              <Text style={{fontSize: 16, color: Colors.textPrimary}}>{product_category}</Text>
              <Text style={{fontSize: 21, fontWeight: 'bold', color: Colors.titleColor, marginTop: 5}}>{product_name}</Text>
              <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                  <Ionicons name="star" size={20} color={Colors.primary} />
                  <Text> 4.8 </Text>
                  <Text style={{color: Colors.textPrimary}}>(210 Reviews)</Text>
              </View>
          </View>

          
          <ProductShots selectedShot={currentShot} selectShot={selectShot} navigation={navigation} shots={pd_shots}/>
      </View>
      

      {/* Product details */}
      <View style={{
          flex: 1, 
          backgroundColor: "#fff", 
          marginTop: 30, 
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          paddingHorizontal: 22,
          paddingTop: 20
          }}>

        {/* Product Colors */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15,}}>
          <Text style={{color: Colors.textSecondary, fontSize: 23, fontWeight: 'bold' }}>Price:</Text>
          <Text style={{ fontWeight: 'bold', color: Colors.textSecondary, fontSize: 20}}> ${product_item.price}</Text>
          <Text style={{color: Colors.textSecondary, fontSize: 16, fontWeight: 'bold' }}>.00</Text>
          {/* <FontAwesome name="circle" size={24} color="black" style={{marginRight: 10,}}>
            <Text></Text>
          </FontAwesome>
          <FontAwesome name="circle" size={24} color={Colors.primary} style={{marginRight: 10,}}/>
          <FontAwesome name="circle" size={24} color="red" style={{marginRight: 10,}}/> */}
        </View>

        {/* Product description */}
        <View>
          <Text style={{color: Colors.titleColor, fontWeight:'bold', fontSize: 18, marginBottom: 10}}>Description</Text>
          <Text style={{color: Colors.textPrimary}}>
            {product_item.description}
            <Text style={{ color: Colors.primary, fontWeight: 'bold'}}> Read more. </Text>
          </Text>
        </View>

        {/* Product Sizes */}
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Text style={{color: Colors.titleColor, fontWeight:'bold', fontSize: 18, flex: 1}}>Size</Text>
            
            {/* <View style={{flex: 1, }}>
              <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <Text style={{marginHorizontal: 6, fontSize: 18, color: Colors.textPrimary}}>UK</Text>
                <Text style={{marginHorizontal: 6, fontSize: 18, color: Colors.textPrimary}}>US</Text>
                <Text style={{marginHorizontal: 6, fontSize: 18, color: 'black'}}>EU</Text>
              </View>
            </View> */}

          </View>

        
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.sizes}>
              <Text>32 gr</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizes}>
              <Text>64 gr</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizes}>
              <Text>128 gr</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizes}>
              <Text>256 gr</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      {/* Add to Cart button */}
      <View style={{justifyContent: 'flex-end', backgroundColor: "#fff", }}>
        <TouchableOpacity style={{
          backgroundColor: Colors.primary, 
          alignItems: 'center',
          paddingVertical: 15,
          marginHorizontal: 25,
          marginVertical: 20,
          borderRadius: 15
          }} onPress={() => {cartItems.push(product_item), changeModalVisibility(true)}}>
          <Text style={{color: "#fff"}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    backgroundColor: Colors.background,
  },
  product_shots: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.textSecondary
  },
  selected_shot: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  sizes: {
    padding: 15, 
    borderWidth: 1, 
    borderRadius: 15, 
    marginRight: 15, 
    borderColor: Colors.textPrimary
  },
  modal: {
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : Colors.titleColor,   
    height: 300 ,  
    width: '100%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',   
    position: 'absolute',
    top: 250,
    // left: 40,  
  }
});

const ProductShots = ({
    shots,
    selectedShot,
    selectShot,
    navigation,
  }) => (
    <View style={{flexDirection: 'row'}}>
      <Image source={shots[selectedShot]} style={{width: 300, height: 200,objectFit: 'contain'}}/>

      <View style={{justifyContent: 'flex-end'}}>
        {/* Product shots */}
          {
              shots.map((shot, index) => {
                  return(
                    <TouchableOpacity style={[styles.product_shots, selectedShot == index && styles.selected_shot]} key={index} onPress={() => selectShot(index)}>
                        <Image source={shot} style={{width: 40, height: 23,objectFit: 'contain'}}/>
                    </TouchableOpacity>
                  );
              })
          }

      </View>

    </View>
  );