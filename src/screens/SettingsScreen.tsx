import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const { authState } = useContext( AuthContext);

  return (
    <View style={{ 
        ...styles.globalMargin,
        marginTop: insets.top + 20
    }}>
        <Text style={ styles.title }>Settings Screen</Text>
        <Text>{ JSON.stringify(authState, null, 5)}</Text>

        {
          authState.favoriteIcon && 
          <Icon 
            name= { authState.favoriteIcon }
            size={150} 
            color= { colors.fireEngineRed }
          />
        
        }
      

        
    </View>
  )
}
