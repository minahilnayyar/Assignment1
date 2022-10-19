import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useEffect } from 'react';




export default function ChatScreen({navigation}) {

  const [fonts, setFonts] = useState(global.fs)
  const [color, setColor] = useState(global.bc)

  
  const [data, setData] = useState([
    {name:'Shaiza',
    message:'   Hello How are you!                       1m',
    path:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
    
    }, 
    {name:'Fatima',
    message:'   Hello How are you!                       1m',
    path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU',
    time:'6m'
    },{name:'Arfa',
    message:'   Hello How are you!                       4m',
    path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU',
    time:'7m'
    }, 
    {name:'Mama',
    message:'   Hello How are you!                       5m',
    path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU',
    time:'8m'
    },{name:'Daddy',
    message:'   Hello How are you!                       6m',
    path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU',
    time:'9m'
    },
    {name:'Furqan',
    message:'   Hello How are you!                       7m',
    path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU',
    time:'9m'
    },{name:'Fatima2',
    message:'   Hello How are you!                       10m',
    path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU',
    time:'10m'
    }, 
    
    
   ])
  
    


    useEffect(() => {
      console.log('navigation useEffect is =')
      const unsubscribe = navigation.addListener('focus', () => {
        // console.log('Called When you are back on LearnFlatList',route.params.ammar)
         setFonts(global.fs);
         setColor(global.bc);
         console.log(global.fs);
      });
      return unsubscribe;
    }, [navigation]);
    
  
return (
    <View style={{flex:1.5,}}>
      
     

      <View style={{flex:1, backgroundColor:'white'}}>
        
        
        <FlatList
            data={data}
            renderItem={
                ({item}) => (
                  
                <TouchableOpacity style={{backgroundColor:"#D9D9D9", marginBottom:5, }} onPress={() =>
                    navigation.navigate('message')}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row',flex:0.85}}>
                            <Image  
                                source={{uri: item.path}}
                                style={{width:40,height:40,alignItems: 'center',margin:10,borderRadius:50,padding:40,marginTop:46,marginLeft:28}}  
                            />
                            <View>
                                <Text style={{fontSize:25, color:'black',fontWeight:'bold',padding:50}}> {item.name}</Text>
                                <Text style={{fontSize:12, color:'black',marginLeft:5,padding:50,marginTop:-60}}>{item.message}</Text>
                            </View>

                        </View>
                        <View style={{flex:5}}>
                            <Text style={{fontSize:8, color:'black',alignItems: 'flex-end',justifyContent: 'flex-end',padding:-10}}> </Text>
                        </View>
                    </View>

                </TouchableOpacity>
                )
                }
            // keyExtractor={item=>item.key}
        />

     </View>



    </View>
  );
}

const styles = StyleSheet.create({
    container: {
		flexDirection: "row",
		backgroundColor: "black",
		paddingTop: 40,
		paddingBottom: 10,
	},
});
