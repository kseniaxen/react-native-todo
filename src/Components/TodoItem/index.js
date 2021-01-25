import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox'
import { todoProps } from '../../Constants/todo'

export const TodoItem = ({ id, name, category, onChangeTodo, isCompleted, todoCategories }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted)
    const [isEditable, setIsEditable] = useState(false)

    const onChange = (key, value) => {
        if (key == todoProps.isCompleted) {
            setToggleCheckBox(value)
        }
        onChangeTodo({ key, value, id })
    }

    // const renderPickerItems = () => {
    //     Object.keys(todoCategories).map((key) => {
    //         return (
    //             <Picker.Item label={todoCategories[key]} value={todoCategories[key]} />
    //         )
    //     })
    // }

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(value) => onChange(todoProps.isCompleted, value)} />
                <View style={styles.textContainer}>
                    {isEditable ? (
                        <TextInput
                            onChangeText={(value) => onChange(todoProps.name, value)}
                            defaultValue={name}
                            style={styles.nameText}
                        />
                    ) : (
                            <Text style={styles.nameText}>{name}</Text>
                        )}
                    {isEditable ? (
                        <Picker
                            onValueChange={(value) => onChange(todoProps.category, value)}
                            selectedValue={category}>
                            {
                                    Object.keys(todoCategories).map((key) => {
                                        return (
                                            <Picker.Item label={todoCategories[key]} value={todoCategories[key]} />
                                        )
                                    })
                            }
                        </Picker>
                    ) : (
                            <Text style={styles.categoryText}>{category}</Text>
                        )}


                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => setIsEditable(!isEditable)}>
                    <Text>Ред.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    infoContainer: {
        flexDirection: 'row'
    },
    textContainer: {
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