import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/AppTheme'
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {
    useEffect(() => { console.log('TabScreen effect')}, [])
  return (
    <View style= {styles.globalMargin}>
        <Text style= {styles.title}> Iconos</Text>
        <Text>
          <TouchableIcon iconName="rocket" />
          <TouchableIcon iconName="bug" />
          <TouchableIcon iconName="paw" />
        </Text>
    </View>
  )
}
