import React from 'react'
import {View, Text, FlatList} from 'react-native'

const todoData = [
    {
        id:'1',
        name:'Hand sanitizer',
        category:'Shopping List'
    },
    {
        id:'2',
        name:'Upload 1099-R to TurboTax',
        category:'Finance'
    },
    {
        id:'3',
        name:'Submit 2019 tax return',
        category:'Finance'
    },
    {
        id:'4',
        name:'Print parking passes',
        category:'Wedding'
    },
    {
        id:'5',
        name:'Sign contract, send back',
        category:'Freelance'
    }
]

export const TodoList = ()=>{

    const renderItem = ({item}) =>(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
        </View>
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