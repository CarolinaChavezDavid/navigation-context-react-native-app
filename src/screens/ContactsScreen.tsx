import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../theme/AppTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {
  const { signIn, authState } = useContext( AuthContext )
  return (
    <View style = {styles.globalMargin}>
        <Text style = {styles.title}>Contacts Screen</Text>
        {
          !authState.isLoggedIn && <Button title='SignIn'onPress={ signIn }/>
        }
        
    </View>
  )
}
