import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/AppTheme';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Settings } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator= () => {
    const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator style= {{
        paddingTop: top
    }}
    sceneContainerStyle= {{
        backgroundColor: 'white'
    }}
    screenOptions={ ({ route }) =>({
        tabBarPressColor: colors.xanthous,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
            backgroundColor: colors.prussianBlue
        },
        tabBarIcon: ({color, focused}) => {
            let iconName: string = '';
            switch( route.name ){
                case 'Chat':
                    iconName = 'mail-sharp'
                break;

                case 'Contacts':
                    iconName = 'person-sharp'
                break;

                case 'Albums':
                    iconName = 'image-sharp'
                break;

            }
            return (
                <Text>
                    <Icon name={iconName} size={20} color= { colors.prussianBlue }/>
                </Text>
            )
        }
        
    })}
    pagerStyle= {{
        borderTopWidth: 0,
        elevation:0,
        shadowColor: 'transparent'
    }}>
      <Tab.Screen name="Chat" component={SettingsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}