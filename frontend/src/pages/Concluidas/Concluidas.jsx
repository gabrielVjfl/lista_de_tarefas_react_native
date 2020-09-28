import React, {useState, useEffect} from 'react'

import {Text, View, Image, ScrollView, ImageBackground} from 'react-native'

import {Main, BtnAddTemplate, Titulo, Navbar, Linha, Texto, TemplateHome, Footer} from '../Home/Style'

import Axios from 'axios'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import {useNavigation} from '@react-navigation/native'

import dayjs from 'dayjs'

import {MeuIp} from '../../services/MeuIp'

require('dayjs/locale/pt-br')

MeuIp.map((item, index) => {
    ip = item.ip
})


const Concluidas = () => {

const [state, setState] = useState({posts: []})
//const [check, setCheck] = useState(<Image style={{width: 25, height: 25}} source={require('../../images/correct.png')}/>)


const navigation = useNavigation()

const HandleTasks = () => {
    return (
        navigation.navigate('Home')
    )
}

const HandleAdicionar = () => {
    return (
        navigation.navigate('Adicionar')
    )
}



Axios.get(`http://${ip}/api/listTaskTrue`).then(response => {
    setState({
        posts: response.data
    })

}).catch(err => {
    console.log(err)
})


const HandleDelete = (_id) => {
    Axios.delete(`http://${ip}/api/delete/${_id}`).then(response => {
        //console.log(response)
    
        alert('Deletou') // colocar toogle ou mensagem
    
    }).catch(err => {
       //console.log(err)
       alert('Ocorreu um erro ao deletar')
    })
    }



const {posts} = state

const todays = dayjs().locale("pt-br").format('ddd, D [de], MMMM')



    return (
        <ImageBackground style={{width: '100%', height: '100%', minHeight: '100%'}}  source={require('../../images/walpaper2.jpg')}>
<Main>

<Text style={{fontSize: 17, alignSelf: 'center', marginTop: '16%'}}>HOJE  {todays}</Text>

<ScrollView>
<Card containerStyle={{backgroundColor: 'white', borderRadius: 40, borderColor: 'black'}}>

    {
        posts.map(posts => 
            <TemplateHome>
         
        
        <Texto>{posts.titulo}</Texto>

        <Button titleStyle={{color: 'red'}}
 containerStyle={{alignSelf: 'center', width: '98%'}}

  icon={<Image style={{height: 20, width: 20, marginRight: '2%'}}
   source={require('../../images/remove.png')}></Image>}

  type="clear" title="Excluir" onPress={() => HandleDelete(posts._id)}>
 </Button>

 
         <Linha/>
         </TemplateHome>
            
            )
    }
    
</Card>

</ScrollView>
           
    
<Footer>
<BtnAddTemplate onPress={HandleAdicionar}>
<Image style={{height: 50, width: 50, marginLeft: '35%'}} source={require('../../images/add2.png')}/>
<Text style={{marginLeft: '32%', color: 'white'}}>Adicionar</Text>
</BtnAddTemplate>


<BtnAddTemplate onPress={HandleTasks}>
<Image style={{height: 50, width: 50, marginLeft: '37%'}} source={require('../../images/requirement.png')}/>
<Text style={{marginLeft: '35%', color: 'white'}}>Tarefas</Text>

</BtnAddTemplate>


</Footer>

</Main>
</ImageBackground>
    )
}

export default Concluidas