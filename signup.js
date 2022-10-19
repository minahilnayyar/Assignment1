
import {
  StyleSheet,
  Text,
  TextInput,
  View,

  TouchableOpacity,
  Button
} from "react-native";


// import ProfileScreen from './ProfileScreen';

import React, { Component, useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import LearnFlatList from './LearnFlatList';
import message from './message';



export default function signup({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={styles.signuptext}>SIGN UP</Text>
      </View>
      <View
        style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.textinput}>
          <TextInput placeholder="email" />
        </View>

        <View style={styles.textinput}>
          <TextInput placeholder="password" secureTextEntry={true} />
        </View>

        <View style={styles.textinput}>
          <TextInput placeholder="repeat password" secureTextEntry={true} />
        </View>
        <View style={styles.textinput}>
          <TextInput placeholder="number" keyboardType="numeric" />
        </View>
      </View>
      <View
        style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ color: "lightgrey" }}>
          Sign Up using social accounts
        </Text>
        <View style={{ flexDirection: "row" }}>
        
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#12c4d0",
            borderRadius: 25,
            width: 150,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white", padding: 15 }}  onPress={() =>
          navigation.navigate('message')
          }>
            SIGN UP
          </Text>

         
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signuptext: {
    color: "#12c4d0",
    fontSize: 50,
  },
  textinput: {
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: 300,
    marginVertical: 10,
    elevation: 20,
    shadowColor: "#12c4d0",
  },
});

