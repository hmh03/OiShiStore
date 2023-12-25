import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Colors from "../utilities/Colors";
import Products from '../utilities/database'; 



export default function Home({navigation}) {
  const [category, setCategory] = useState("All");   
  // const [theme, setTheme] = useState('Colors.background')
  // const changeBackgroud=()=>{
  //   setTheme(theme===Colors.background? 'black':Colors.background)
  // }
  // console.log('theme',theme)
  return (
    <SafeAreaView style={styles.container}>

      {/* Homepage top-nav */}
      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="options" size={24} color={Colors.titleColor} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Cart")}>
          {/* <Ionicons name="cart" size={24} color={Colors.titleColor} style={{alignSelf: 'flex-end'}}/> */}
          <Image source={require("../assets/icons/products.png")} style={{width: 30, height: 30,alignSelf: 'flex-end'}}/>
        </TouchableOpacity>
      </View>

      <View style={{marginVertical: 10,alignItems: 'center'}}>
        <Image source={require("../assets/icons/logo.png")}/>
        {/* <Text style={{fontSize: 21, fontWeight: "bold", color: Colors.titleColor}}>Perfect Shoes</Text>
        <Text style={{fontSize: 15.5, fontStyle: 'italic', color: Colors.titleColor}}>For perfect style</Text> */}
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>

        {/* search bar */}
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: "#fff",
          padding: 10,
          marginRight: 20,
          borderRadius: 12,
          }}>
          <Feather name="search" size={24} color="black" style={{paddingHorizontal: 10,}} />
          <TextInput placeholder="Search" style={{marginRight:20, paddingRight: '70%'}}/>
        </View>

        {/* filter  icon */}
        <View style={{
          // flex: 1, 
          flexDirection: 'row', 
          justifyContent:'flex-end',
          backgroundColor: Colors.primary,
          padding: 10,
          borderRadius: 12,
          }}>
            <TouchableOpacity>
              <Ionicons name="ios-options-sharp" size={24} color="white" />
            </TouchableOpacity>
        </View>
      </View>

      {/* Product listings based on categories */}
      <ProductList values={["All","Snacks", "Drinks", "Candys", "Cookies"]} selectedCategory={category} setSelectedCategory={setCategory} navigation={navigation} products={Products}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    marginTop: 10,
    backgroundColor: Colors.background,
    // overflow: 'visible'
  },
  // themedContainer: (theme) => ({
  //   backgroundColor: 'theme',
  //   // Các quy tắc CSS khác ở đây
  // }),
  product: {
    backgroundColor: '#fff', 
    paddingHorizontal: 7,
    paddingVertical: 18, 
    borderRadius: 15,
    marginBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 3,
    //   height: 2,
    // },
    // shadowOpacity: 1.25,
    // shadowRadius: 0.84,
    elevation: 2,
  },

  categoryButtons: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: Colors.primary,
  },
  categoryLabel: {
    color: "black",

  },
  selectedCategoryLabel: {
    color: "white",
  }
});


const ProductList = ({
  values,
  products,
  selectedCategory,
  setSelectedCategory,
  navigation,
}) => (
  <SafeAreaView >

    {/* oishi category's */}
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 15,}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
      {
        values.map(value => {
          return(
            <TouchableOpacity  key={value} style={[styles.categoryButtons, selectedCategory == value && styles.selectedCategoryButton]} onPress={() => setSelectedCategory(value)}>
              <Text style={[styles.categoryLabel, selectedCategory == value && styles.selectedCategoryLabel]}>{value}</Text>
            </TouchableOpacity>
          );
        })
      }
    </View>
    </ScrollView>
    

    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 280}}>
      <View style={{
          // flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        
        {
          products.map((product, index) => {
            if (product.type == selectedCategory){
              return(
                <TouchableOpacity key={product.name} style={styles.product} onPress={() => {navigation.navigate('Product', {index: index})}} >
                  <AntDesign name="hearto" size={24} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 10, marginTop: 8}} />
                  <Image source={product.images[0]} style={{width: 160, height: 160, marginBottom: 15,objectFit: 'contain'}}/>
                  <View style={{paddingLeft: 10}}>
                    <Text style={{color: Colors.titleColor, fontSize: 16, fontWeight: 'bold'}}>{product.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                      <Text style={{color: Colors.textSecondary, fontSize: 16, fontWeight: 'bold' }}>${product.price}</Text>
                      <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>.00</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }else if(selectedCategory=="All"){
              return(
                <TouchableOpacity key={product.name} style={styles.product} onPress={() => {navigation.navigate('Product', {index: index})}} >
                  <AntDesign name="hearto" size={24} color="black" style={{alignSelf: 'flex-end', color: Colors.textSecondary, marginRight: 10, marginTop: 8}} />
                  <Image source={product.images[0]} style={{width: 160, height:160, marginBottom: 15, objectFit: 'contain'}}/>
                  <View style={{paddingLeft: 10}}>
                    <Text style={{color: Colors.titleColor, fontSize: 16, fontWeight: 'bold'}}>{product.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                      <Text style={{color: Colors.textSecondary, fontSize: 16, fontWeight: 'bold' }}>${product.price}</Text>
                      <Text style={{color: Colors.textSecondary, fontSize: 14, fontWeight: 'bold' }}>.00</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          })
        }    

      </View>
    </ScrollView>

  </SafeAreaView>

);
