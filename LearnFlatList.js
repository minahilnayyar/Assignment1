
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import signup from './signup';

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  import Home from './home';
export default function LearnFlatList() {

    
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
  
    
  
return (
    <View style={{flex:1,}}>
      

      <View style={{flex:0.90, backgroundColor:'#3869D1'}}>

        {console.log(data)}
        
        <FlatList
            data={data}
            renderItem={
                ({item}) => (
                <View style={{backgroundColor:'#F2F2F2', marginBottom:20,
             width:400,height:110,borderRadius:1,marginTop:10,marginLeft:20,borderRadius:30,right:-1000,marginTop:22,
                paddingLeft: 10 }}>
                  <View style={{flexDirection:'row'}}>
                  <Image 
                    
                    source={{uri: item.path}}
                    
                    style={{width:2,height:1,alignItems: 'center',margin:2,borderRadius:2,		flexDirection: 'row',
                 }} 
                    
                    />
                    <Text style={{fontSize:50, color:'black',fontWeight:'bold'}}> {item.name}</Text>
                  </View>
                   
                    
                    <Text style={{fontSize:17, color:'black',marginTop:-42}}>Message:{item.message}</Text>
                    
                    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                    <Image 
                    
                    source={{uri: item.path}}
                    
                    style={{width:300,height:300,alignItems: 'center'}} 
                    
                    />
                    </View>
                    <Text style={{fontSize:10, color:'blacks',textAlign:'right',paddingRight:16,paddingBottom:2}}> Time:{item.time}</Text>

                  
                </View>
                
                )
                }
            // keyExtractor={item=>item.key}
        />

     </View>
     <View style={styles.textinput}>
          <TextInput placeholder="Enter the message to send" />
        </View>
     <View style={{flex:0.10,flexDirection:"row" ,alignItems:'center',justifyContent:'center'}}>

        <TouchableOpacity style={{width:150, height:40,margin:3, backgroundColor:'green', alignItems:'center',justifyContent:'center'}} onPress={() =>
          navigation.navigate('signup')
          }>
          <Text style={{fontSize:20, color:'white'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:150, height:40,margin:3, backgroundColor:'green', alignItems:'center',justifyContent:'center'}} onPress={() =>
          navigation.navigate('signup')
          }>
          <Text style={{fontSize:20, color:'white'}}  >Signup</Text>
        </TouchableOpacity>
     </View>

     <TouchableOpacity style={{width:150, height:40,margin:3, backgroundColor:'green', alignItems:'center',justifyContent:'center'}} onPress={() =>
          navigation.navigate('messsage')
          }>
          <Text style={{fontSize:20, color:'white'}}  >message</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
  marginTop:33,
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    width:1000,
    left:222,
    marginVertical: 10,
    elevation: 20,
    shadowColor: "#12c4d0",
  },
});