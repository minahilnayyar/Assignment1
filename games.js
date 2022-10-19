import useApi from "./hook";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button,FlatList,ScrollView } from 'react-native';
import { useEffect } from "react";


export default function games(){
    

    const {loading,data} = useApi('https://api.sampleapis.com/switch/games')
    useEffect(()=>{

    },[])
    return(
        <View>
            <ScrollView>
            <FlatList
            data={(data)}
            renderItem={
                ({item}) => (


                <View style={{backgroundColor:'red', margin:10, height:150,borderRadius:10, elevation:20 }}>
                    
                    <Text style={{fontSize:20, color:'white'}}>  Title: {item.title}</Text>
                    <Text style={{fontSize:20, color:'white', padding:10}}>  Description: {item.description}</Text>
                   
                </View>
                )
                }
            
        />

        </ScrollView>
        </View>
    );
}