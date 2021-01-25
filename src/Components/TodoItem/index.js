import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import {todoProps} from '../../Constants/todo'

export const TodoItem = ({ id, name, category, onChangeTodo, isCompleted }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted)

    const onChange = (key, value) =>{
        setToggleCheckBox(value)
        onChangeTodo({key, value, id})
    }
    return (
        <View style={styles.container}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(value) => onChange(todoProps.isCompleted,value)} />
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.categoryText}>{category}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection:'row'
    },
    textContainer:{
        marginLeft: 15
    },
    nameText: {
        fontSize: 18,
        color: '#575767',
        marginBottom: 4
    },
    categoryText: {
        color: '#B9B9BE'
    }
})