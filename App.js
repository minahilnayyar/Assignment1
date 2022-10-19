import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LearnFlatList from './LearnFlatList';
import Home from './Home';
import signup from './signup';
import message from './message';
import call from './call';
import chatarea from "./chatarea";
import coffeelist from "./coffeelist";
import games from "./games";
import Chat from "./Chat";

import audioplay from "./audioplay";
import main from "./main";

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="main" component={main} options={{ title: 'Main' }} />
      <Stack.Screen name="chatarea" component={chatarea} options={{ title: 'chatScreen' }} />
      <Stack.Screen name="message"  component={message} options={{ title: 'Welcome' }} />
      <Stack.Screen name="Chat" component={Chat} options={{ title: 'Welcome' }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
      <Stack.Screen name="signup"  component={signup} options={{ title: 'Welcome' }} />
     <Stack.Screen name="audioplay" component={audioplay} options={{ title: 'Welcome' }} />
     <Stack.Screen name="coffeelist" component={coffeelist} options={{ title: 'coffee' }} />
     <Stack.Screen name="games" component={coffeelist} options={{ title: 'games' }} />
        <Stack.Screen name="LearnFlatList" component={LearnFlatList} options={{ title: 'Welcome' }} />  
        <Stack.Screen name="call" component={call} options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
