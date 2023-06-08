import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Scree';
import { StackNavigator } from './StackNavigator';
import { colors, styles } from '../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
    return Platform.OS === 'ios' ? <BottomTabNavigatorIOS /> :<BottomTabNavigatorAndroid/>
}


const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabNavigatorAndroid = () => {
  return (
    <TabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle= {{
            backgroundColor: colors.xanthous
        }}
        screenOptions={({ route }) => ({

            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch( route.name ) {
                    case 'Tab1Screen':
                        iconName = 'moon-outline'
                    break;

                    case 'TopTabNavigator':
                        iconName = 'leaf-outline'
                    break;

                    case 'StackNavigator':
                        iconName = 'rose-outline'
                    break;

                }
                return (
                    <Text>
                        <Icon name={iconName} size={20} color= { colors.prussianBlue }/>
                    </Text>
                )
            }
            })}>

      <TabAndroid.Screen name="Tab1Screen" options = {{title: 'Tab1'}}  component={Tab1Screen}/>
      <TabAndroid.Screen name="TopTabNavigator" options = {{title: 'Tab2' }} component={TopTabNavigator} />
      <TabAndroid.Screen name="StackNavigator" options = {{title: 'Stack' }} component={StackNavigator} />
    </TabAndroid.Navigator>
  );
}

const TabIOS = createBottomTabNavigator();

export const BottomTabNavigatorIOS = () => {
  return (
    <TabIOS.Navigator 
        sceneContainerStyle = {{
            backgroundColor: 'white'
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = '';
                switch( route.name ){
                    case 'Tab1Screen':
                        iconName = 'moon-outline'
                    break;

                    case 'TopTabNavigator':
                        iconName = 'leaf-outline'
                    break;

                    case 'StackNavigator':
                        iconName = 'rose-outline'
                    break;

                }
                return (
                    <Text>
                        <Icon name={iconName} size={80} color= { colors.fireEngineRed }/>
                    </Text>
                )
            },
            tabBarActiveTintColor: colors.prussianBlue,
            tabBarStyle: {
                borderTopColor: colors.prussianBlue,
                borderTopWidth: 0,
                elevation:0
                
            },
            tabBarLabelStyle:{
                fontSize: 15
            }
        })}

    >
      <TabIOS.Screen name="Tab1Screen" options = {{title: 'Tab1'}}  component={Tab1Screen}/>
      <TabIOS.Screen name="TopTabNavigator" options = {{title: 'Tab2' }} component={TopTabNavigator} />
      <TabIOS.Screen name="StackNavigator" options = {{title: 'Stack' }} component={StackNavigator} />
      {/* <Tab.Screen 
        name="Tab1Screen" 
        options = {
            {
                title: 'Tab1', 
                tabBarIcon: (props) => <Text style= {{ color: props.color}}>T1</Text> 
            }
        } 
        component={Tab1Screen} 
        /> */}
    </TabIOS.Navigator>
  );
}