import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ({ route, navigation }: Props) => {
    const params = route.params;

    const {updateUserName} = useContext(AuthContext)

    useEffect( () => {

        navigation.setOptions({
            title: params.nombre
        })

    },[]);

    useEffect( () => {updateUserName (params.nombre)},[]);

  return (    
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            {
                JSON.stringify( params, null, 3 )
            }

        </Text>
    </View>
  )
}
