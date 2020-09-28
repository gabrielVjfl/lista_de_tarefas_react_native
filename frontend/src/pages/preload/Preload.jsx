import React, {useEffect} from 'react'

import {Main, Loading} from './Style'

import {Image} from 'react-native'

import {useNavigation} from '@react-navigation/native'



import AsyncStorage from '@react-native-community/async-storage'

const Preload = () => {
    const navigation = useNavigation()

useEffect(() => {
    const CheckToken = async () => {
         const token = await AsyncStorage.getItem('token')

         if(token) {

         }
         else {
             navigation.reset({
                 routes: [{name: 'Home'}]
             })
         }
    }
    CheckToken()
}, [])



    return (
    <Main>
        <Image style={{width: 80, height: 80, alignSelf: 'center', marginTop: '34%'}} source={require('../../images/correct.png')}/>
        <Loading size="large" color="green"></Loading>
    </Main>
    )
}
export default Preload