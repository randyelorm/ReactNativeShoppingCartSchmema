import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from "../Components/AddToCart";
import OnlineShopping from "../Components/OnlineShopping";
import PaymentSuccessFull from "../Components/PaymentSuccessFul";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme  } from "@react-navigation/native"



const Stack = createStackNavigator()

const RootNavigator = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };
      

    
    return (
        <NavigationContainer theme = {MyTheme}>
            <Stack.Navigator>

            <Stack.Screen
                 name="OnlineShopping" 
                 component={OnlineShopping}
                 options={{  headerShown : false}} />

                <Stack.Screen
                    name="Add To Cart"
                    component={AddToCart}
                    options={{  headerShown : false}}
                   
                    />
                
                
                <Stack.Screen
                 name="Payment SuccessFull" 
                 component={PaymentSuccessFull}
                 options={{  headerShown : false}} />






            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;