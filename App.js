import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './components/Landing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Background from './components/Background';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Background" component={Background} />
    </Stack.Navigator>
  </NavigationContainer>

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
