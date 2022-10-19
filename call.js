
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

import message from './message';

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function call() {

    
  const [data, setData] = useState([
    {
    message:'Wish me best of luck for not messing up the things There are so many groups and i am very close to send wrong message ',
    time:'11:02 AM'
    }, 
    {
    message:'Important Groups pin kr lo ',
    time:'11:02 AM'
    },{
    message:'Wo zayada bura hoga because i am not used to that ',
    time:'10:59 AM'
    }, 
    {
    message:'Hello How are you',
    time:'11:02 AM'
    }])
}