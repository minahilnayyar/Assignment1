
import { StyleSheet, Text, View,  TextInput, TouchableOpacity, Button } from 'react-native';
// import ProfileScreen from './ProfileScreen';

import React, { Component, useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import LearnFlatList from './LearnFlatList';

 

export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginBottom:50,fontWeight:"bold",color:'white',fontSize:50}}>
          Sign Up
          </Text>
      </View>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Number"
          placeholderTextColor="#003f5c"
          
          keyboardType='numeric'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginRight:10}}>
  
    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginRight:10}}>

    </TouchableOpacity>

    <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent:'center',marginRight:10}}>

    </TouchableOpacity>
      </View>
      
      
 
      <TouchableOpacity style={styles.loginBtn} onPress={() =>
          navigation.navigate('LearnFlatList')
          }>
        <Text style={styles.loginText}>LOGIN</Text>
        
      </TouchableOpacity>
      

      
      <TouchableOpacity style={styles.loginBtn} onPress={() =>
          navigation.navigate('chatarea')
          }>
        <Text style={styles.loginText}>Signup</Text>
        
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() =>
          navigation.navigate('coffeelist')
          }>
        <Text style={styles.loginText}>Coffee</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() =>
          navigation.navigate('games')
          }>
        <Text style={styles.loginText}>Games</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FA1D6",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
  },
});


