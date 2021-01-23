import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const CircleButton = ({add}) =>{
    return (
        <TouchableOpacity style={styles.container} onPress={()=>add()}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        right:20,
        bottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        backgroundColor:'#3F4EA8',
        width:56,
        height:56
    },
    text:{
        color:'#FFFFFF',
        fontSize:45
    }
})