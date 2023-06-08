import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Screen2 = ({ navigation }: Props) => {
    const navigator = useNavigation();

  return (
    <View style={ styles.globalMargin }>
    <Text style={styles.title }> Pagina2Screen </Text>

    <Button
        title="Ir página 3"
        onPress={ () => navigation.navigate('Screen3')  }
    />
    </View>
  )
}
