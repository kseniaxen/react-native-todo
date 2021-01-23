import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { TodoItem } from '../TodoItem'

export const TodoList = ({todoData})=>{

    const renderItem = ({item}) =>(
        <TodoItem name={item.name} category={item.category}/>
    )

    return (
        <View>
            <FlatList 
            data={todoData}
            renderItem={renderItem}
            keyExtractor={item=>item.id}/>
        </View>
    )
}