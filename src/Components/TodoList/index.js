import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { TodoItem } from '../TodoItem'

export const TodoList = ({ todoData, onChangeTodo }) => {

    const renderItem = ({ item }) => (
        <TodoItem
            id={item.id}
            name={item.name}
            category={item.category}
            onChangeTodo={onChangeTodo}
            isCompleted={item.isCompleted}
        />
    )

    return (
        <View>
            <FlatList
                data={todoData}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
        </View>
    )
}