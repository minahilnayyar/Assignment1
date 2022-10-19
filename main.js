import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {

  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
  })
    return (
      <View style={{flex:1, backgroundColor:'black'}}>
        {console.log('Return')}
  
        <Button
            title="Go to Chat Area"
            onPress={() =>
            navigation.navigate('chatarea',{id:'hef34231'})
          }
          />
  
      
        
      
          <Button
            title="Voice note"
            onPress={() =>
            navigation.navigate('Chat')
          }
          />
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  