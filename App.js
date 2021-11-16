import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from './Components/AddToCart';
import RootNavigator from './Navigator/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
    
     <RootNavigator/>

    
   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:16,
    
    // marginTop: 80
 
    
  },
});
