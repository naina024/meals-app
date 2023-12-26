import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN } from './constants';

import Categories from './screens/Categories';
import Meals from './screens/Meals';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'}
          }}
        >
          <Stack.Screen 
            name={SCREEN.CATEGORIES} 
            component={Categories} 
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen 
            name={SCREEN.MEALS}
            component={Meals}
            // Note: one way of passing dynamic options to stack screen
            // options={({route, navigation}) => {
            //   // return dynamic options
            //   return {
            //     title: route.params.categoryId
            //   }
            // }}
          />
          <Stack.Screen 
            name={SCREEN.MEAL_DETAILS} 
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
