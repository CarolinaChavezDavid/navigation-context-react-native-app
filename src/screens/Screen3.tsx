import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};

export const Screen3 = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
            <Text style={styles.title }> Página 3 </Text>

            <Button 
                title="Regresar"
                onPress={ () => navigation.pop() }
            />

            <Button 
                title="Ir al Página 1"
                onPress={ () => navigation.popToTop() }
            />
    </View>
  )
}
