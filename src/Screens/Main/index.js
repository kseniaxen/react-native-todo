import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { CircleButton } from '../../Components/CircleButton'
import { TodoBlock } from '../../Components/TodoBlock'
import {todoProps} from '../../Constants/todo'
import {initaltodoData, categoriesData} from '../../Constants/todoStructure'


function generateId() {
    return Math.floor(Math.random() * Math.floor(1000)).toString()
}

const initialTask = {
    [todoProps.id]: null,
    [todoProps.isCompleted]: false,
    [todoProps.name]: 'Новая задача',
    [todoProps.category]: null
}


export const Main = () => {
    const [todoData, setTodoData] = useState(initaltodoData)


    const addNewTask = () => {
        setTodoData([
            ...todoData,
            {
                ...initialTask,
                [todoProps.id]: generateId()
            }
        ])
    }

    const filterTodoData = ({ data, status }) => {
        return data.filter((item) => item.isCompleted === status)
    }

    const onChangeTask = ({ key, value, id }) => {
        const newTodoData = todoData.map(item=> {
            if(item.id === id){
                return {
                    ...item,
                    [key]:value
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
                onChangeTodo={onChangeTask}
                todoCategories={categoriesData}
            />
            <TodoBlock
                todoData={filterTodoData({ data: todoData, status: true })}
                title={'Выполненные'}
                onChangeTodo={onChangeTask}
                todoCategories={categoriesData}
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