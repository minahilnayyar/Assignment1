import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
    TouchableOpacity,
  } from 'react';
  
  import { View,Text } from 'react-native'
  import { GiftedChat } from 'react-native-gifted-chat'
  
  export default function message() {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Long time no see",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Ta",
                   
                },     
            },
            {
                _id:2,
                text:"How r you!",
                createdAt: new Date(),
                user: {
                    _id:3,
                 
  
                }
            },
            {
                _id:3,
                text:"Hii ",
                createdAt: new Date(),
                user: {
                    _id:2,
                    name: "Ta",
                  
                }
            },
            {
                _id:2,
                text:"Heyyyy ",
                createdAt: new Date(),
                user: {
                    _id:3,
                    name: "Ta",
                  
                }
            },
            
        ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    
    return (
        
        <View style={{flex:1, backgroundColor:"white"}}>
             {/* <TouchableOpacity style={{paddingLeft:6,color:"white"}} onPress={() =>
          navigation.navigate('Chat')
          }>
       <Text style={{paddingLeft:6,color:"white"}}>Voicenote</Text>
        
      </TouchableOpacity> */}

            <Text style={{paddingLeft:6,color:"black"}}>Welcome to chat screen</Text>
             <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
                _id: 2,
                _id: 3,
               
            }}
          
           
        />
        
            
        </View>
        
  
  
    )
  }