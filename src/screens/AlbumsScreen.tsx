import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../theme/AppTheme'
import { AuthContext, AuthSate } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {authState, logout} = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Albums Screen</Text>
        {
          authState.isLoggedIn && <Button title='Logout' onPress={ logout }/>
        }
        
    </View>
  )
}
