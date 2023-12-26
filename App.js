import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { SCREEN } from './constants';

import Categories from './screens/Categories';
import Meals from './screens/Meals';
import MealDetails from './screens/MealDetails';
import Favourites from './screens/Favourites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#3f2f25'},
        drawerActiveTintColor: '#e4baa1',
        drawerInactiveTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name={SCREEN.CATEGORIES}
        component={Categories} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
        }}
      />
      <Drawer.Screen
        name={SCREEN.FAVOURITES}
        component={Favourites}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
        }}
      />
    </Drawer.Navigator>
  )
}

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
            name='Drawer Screen'
            component={DrawerNavigator} 
            options={{
              headerShown: false
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
            options={{
              title: 'About the Meal'
            }}
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
