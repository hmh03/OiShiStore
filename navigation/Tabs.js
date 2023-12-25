import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Foundation, Ionicons, Entypo } from '@expo/vector-icons';
import React from 'react';
import Home from "../screens/Home";
import Profile from '../screens/Profile';
import Colors from "../utilities/Colors";
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                padding: 10,
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
                backgroundColor: '#FAFAFA',
                borderWidth:2,
                borderColor:'#F1F1F1'
                
              }
        
        }}>

          {/* Home Screen */}
          <Tab.Screen name="Home" component={Home} options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Entypo name="home"size={30}  color={color} />
              ),

          }} />

          {/* Profile Screen */}
          <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name="person" size={30} color={color} />
              ),
          }}/>

        </Tab.Navigator>
    );
}

export default Tabs;