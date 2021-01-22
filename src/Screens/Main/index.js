import React from 'react'
import { View } from 'react-native'
import { TodoList } from '../../Components/TodoList'
import {CircleButton} from '../../Components/CircleButton'

export const Main = () => {
    return (
        <View>
            <TodoList/>
            <CircleButton/>
        </View>
    );
}