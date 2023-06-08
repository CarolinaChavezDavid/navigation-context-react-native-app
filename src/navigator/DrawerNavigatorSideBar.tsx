import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { colors, styles } from '../theme/AppTheme';
import { Tabs } from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorSideBar = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerType = {width >= 768 ? 'permanent' : 'front'}
        drawerContent={ (props) => <InnerMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" options={{title: 'Home'}} component={Tabs} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const InnerMenu = ( { navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/*Contenedor Avatar*/}
      <View style ={styles.avatarContainer}>
        <Image
          source={
            {
              uri:'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
            }
          }
          style = {styles.avatar} />
      </View>

      {/*Opciones de menú*/}
      <View style = {styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuBoton} 
          onPress={ () => navigation.navigate('BottomTabNavigator')}>
          <Icon name={'navigate'} size={20} color= { colors.prussianBlue }/>
          <Text style= {styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuBoton} 
          onPress={ () => navigation.navigate('SettingsScreen')}>
          <Text style= {styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>

  );
}