import React, {useState} from 'react'

import {Text, Image, TextInput, ImageBackground} from 'react-native'

import {Main, Titulo, Footer,
 Navbar, TemplateHome,
 BtnAddTemplate} from '../Home/Style'

 import {TemplateInput, TemplateButton} from './FormStyle.jsx'

 import {useNavigation} from '@react-navigation/native'

import Axios from 'axios'


const Adicionar = () => {

    const [state, setState] = useState({titulo: ''})

    const navigation = useNavigation()

const HandleTarefas = () => {
    return (
      navigation.navigate('Home')
    )
}
const HandleConcluidas = () => {
    return (
        navigation.navigate('Concluidas')
    )
}

const handleSubmit = () => {
Axios.post("http://192.168.100.5:3338/api/inserir", state).then(response => {
  alert('Tarefa Adicionada') // usar state de mensagem
  console.log(response)


}).catch(err => {
    console.log(err)
    alert('Deu erro')
})

setState('')
}


    return (
        <ImageBackground style={{width: '100%', height: '100%', minHeight: '100%'}}  source={require('../../images/walpaper2.jpg')}>
    <Main>
      

        <TemplateInput>
<TextInput style={{marginLeft: '7%', marginTop: '2.5%'}} 
value={state.titulo} placeholder="Digite o Titulo da Tarefa" onChangeText={titulo => setState({...state, titulo: titulo})}
placeholderTextColor="black"
             ></TextInput>
        </TemplateInput>

<TemplateButton onPress={handleSubmit}>
<Image style={{width:60, height: 60, alignSelf: 'center', marginTop: '11%'}} source={require('../../images/add2.png')}/>
</TemplateButton>
        

        <Footer>
       <BtnAddTemplate onPress={HandleTarefas}>
       <Image style={{height: 50, width: 50, marginLeft: '35%'}} source={require('../../images/requirement.png')}/>
       <Text style={{marginLeft: '34%', color: 'white'}}>Tarefas</Text>
       </BtnAddTemplate>

       <BtnAddTemplate onPress={HandleConcluidas}>
       <Image style={{height: 50, width: 50, marginLeft: '36%'}} source={require('../../images/correctnew.png')}/>
       <Text style={{marginLeft: '31%', color: 'white'}}>Concluidas</Text>
       </BtnAddTemplate>
        </Footer>
    </Main>
    </ImageBackground>
    )
}
export default Adicionar

