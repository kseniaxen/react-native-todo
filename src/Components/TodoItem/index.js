import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

export const TodoItem = ({ name, category }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)} />
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.categoryText}>{category}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 18,
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