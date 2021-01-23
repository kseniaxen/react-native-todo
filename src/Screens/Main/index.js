import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TodoList } from '../../Components/TodoList'
import { CircleButton } from '../../Components/CircleButton'

const initaltodoData = [
    {
        id: '1',
        name: 'Hand sanitizer',
        category: 'Shopping List'
    },
    {
        id: '2',
        name: 'Upload 1099-R to TurboTax',
        category: 'Finance'
    },
    {
        id: '3',
        name: 'Submit 2019 tax return',
        category: 'Finance'
    },
    {
        id: '4',
        name: 'Print parking passes',
        category: 'Wedding'
    },
    {
        id: '5',
        name: 'Sign contract, send back',
        category: 'Freelance'
    }
]

function generateId() {
    return Math.floor(Math.random() * Math.floor(1000)).toString()
}

const initialTask = {
    id: null,
    name: 'Новая задача',
    category: null
}


export const Main = () => {
    const [todoData, setTodoData] = useState(initaltodoData)


    const addNewTask = () => {
        setTodoData([
            ...todoData,
            {
                ...initialTask,
                id: generateId()
            }
        ])
    }

    return (
        <View style={styles.container}>
            <TodoList todoData={todoData} />
            <CircleButton add={addNewTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})