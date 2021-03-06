import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TodoList} from '../TodoList'

export const TodoBlock = ({todoData, title, onChangeTodo, todoCategories}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TodoList todoData={todoData} onChangeTodo={onChangeTodo} todoCategories={todoCategories}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        marginBottom:30
    }, 
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#575767'
    }
})