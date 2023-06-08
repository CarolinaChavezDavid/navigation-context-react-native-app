import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { colors, styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationState } from '@react-navigation/native'


interface Props extends DrawerScreenProps<any, any>{};

export const Screen1 = ({ navigation }: Props ) => {


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => navigation.toggleDrawer() }
                >
                    <Icon 
                        name="menu-outline"
                        color={ colors.prussianBlue }
                        size={ 35 }
                    />
                </TouchableOpacity>
            )

        })
    }, [])
  return (
    <View style= { styles.globalMargin }>
    <Text style={styles.title }>Página 1 </Text>

    <Button 
        title="Ir página 2"
        onPress={ () => navigation.navigate('Screen2') }
    />

    <Text style={{ 
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
     }}> Navegar con argumentos
    </Text>


    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
            style={{ 
                ...styles.botonGrande,
                backgroundColor: '#5856D6'
            }}
            onPress={ () => navigation.navigate('PersonScreen', {
                id: 1,
                nombre: 'Carolina'
            }) }
        >
            <Icon 
                name="woman-outline"
                color="white"
                size={ 35 }
                    />
            <Text style={ styles.botonGrandeTexto }>Carolina</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={{ 
                ...styles.botonGrande,
                backgroundColor: '#FF9427'
            }}
            onPress={ () => navigation.navigate('PersonScreen', {
                id: 2,
                nombre: 'Alicia'
            }) }
        >
            <Icon 
                name="woman-outline"
                color="white"
                size={ 35 }
                    />
            <Text style={ styles.botonGrandeTexto }>Alicia</Text>
        </TouchableOpacity>

    </View></View>
  )
}
