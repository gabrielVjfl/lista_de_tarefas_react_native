import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home/Home'

import Preload from '../pages/preload/Preload'

import Concluidas from '../pages/Concluidas/Concluidas'

import Adicionar from '../pages/Adicionar/Adicionar'

const Stack = createStackNavigator()

const StackMain = () => {

    return (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Concluidas" component={Concluidas}/>
        <Stack.Screen name="Adicionar" component={Adicionar}/>
    </Stack.Navigator>
    )
}
export default StackMain