import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigatorSideBar } from './src/navigator/DrawerNavigatorSideBar';
import { Tabs } from './src/navigator/BottomTabNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/*<StackNavigator />*/}
        {/* <MenuLateralBasico /> */}
        <Tabs />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;