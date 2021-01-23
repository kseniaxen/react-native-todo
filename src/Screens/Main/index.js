import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { CircleButton } from '../../Components/CircleButton'
import { TodoBlock } from '../../Components/TodoBlock'

const initaltodoData = [
    {
        id: '1',
        isCompleted: true,
        name: 'Hand sanitizer',
        category: 'Shopping List'
    },
    {
        id: '2',
        isCompleted: false,
        name: 'Upload 1099-R to TurboTax',
        category: 'Finance'
    },
    {
        id: '3',
        isCompleted: true,
        name: 'Submit 2019 tax return',
        category: 'Finance'
    },
    {
        id: '4',
        isCompleted: false,
        name: 'Print parking passes',
        category: 'Wedding'
    },
    {
        id: '5',
        isCompleted: true,
        name: 'Sign contract, send back',
        category: 'Freelance'
    }
]

function generateId() {
    return Math.floor(Math.random() * Math.floor(1000)).toString()
}

const initialTask = {
    id: null,
    isCompleted: false,
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

    const filterTodoData = ({ data, status }) => {
        return data.filter((item) => item.isCompleted === status)
    }

    const setTaskCompleted = ({ isChecked, id }) => {
        const newTodoData = todoData.map(item=> {
            if(item.id === id){
                return {
                    ...item,
                    isCompleted:isChecked
                }
            }else{
                return item
            }
        })
        setTodoData(newTodoData)
    }

    return (
        <View style={styles.container}>
            <TodoBlock
                todoData={filterTodoData({ data: todoData, status: false })}
                title={'Невыполненные'}
                setTaskCompleted={setTaskCompleted}
            />
            <TodoBlock
                todoData={filterTodoData({ data: todoData, status: true })}
                title={'Выполненные'}
                setTaskCompleted={setTaskCompleted}
            />
            <CircleButton add={addNewTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        paddingVertical:17
    }
})